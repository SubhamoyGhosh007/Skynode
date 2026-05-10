import {model, Schema} from 'mongoose'
import {IUser} from "../types";
import bcrypt from "bcrypt";

const UserSchema = new Schema<IUser>({
    tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant' }, // null for master_admin
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['master_admin', 'tenant_admin', 'customer'], required: true },
    status: { type: String, enum: ['active', 'suspended', 'banned'], default: 'active' },
    emailVerified: { type: Boolean, default: false },
    lastLoginAt: { type: Date },
    avatarUrl: { type: String, required: false },
}, { timestamps: true });

// Compound index for tenant scoping
UserSchema.index({ email: 1, tenantId: 1 }, { unique: true });

// Save the lastLoginAt
UserSchema.pre<IUser>('save', async function () {
    if(this.isModified('passwordHash')){
        const salt = await bcrypt.genSalt(10);
        this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
    }
    this.lastLoginAt = new Date(Date.now())
})

// Check Password
UserSchema.methods.isPasswordValid = async function (password: string) {
    return await bcrypt.compare(password, this.passwordHash)
}

export const User = model('User', UserSchema);
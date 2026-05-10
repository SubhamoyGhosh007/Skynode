import {Schema, model} from 'mongoose'

const TenantBrandingSchema = new Schema({
    tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true, unique: true },
    companyName: { type: String },
    logoUrl: { type: String },
    iconUrl: { type: String },
    primaryColor: { type: String, default: '#6366f1' },
    secondaryColor: { type: String, default: '#8b5cf6' },
    supportEmail: { type: String },
    customCss: { type: String }
}, { timestamps: true });

export const TenantBranding = model('TenantBranding', TenantBrandingSchema);
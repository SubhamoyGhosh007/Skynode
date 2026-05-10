import {Schema, model} from 'mongoose'

const TenantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: { // used for subdomain: slug.skynode.com
        type: String,
        required: true,
        unique: true,
    },
    customDomain: {
        type: String,
        unique: true,
        sparse: true,
    },
    domainVerified: {
        type: Boolean,
        default: false,
    },
    ownerEmail: {
        type: String,
        required: true,
    },
    plan:{
        type: String,
        enum: ['starter' , 'pro', 'enterprise'],
        default: 'starter',
    },
    status: {
        type: String,
        enum: ['active', 'suspended' , 'canceled'],
        default: 'active',
    },
    region: { // ISO Country Code
        type: String,
    },
    settings: {
        type: Schema.Types.Mixed,
        default: {}
    }
}, {timestamps: true});

export const Tenant = model('Tenant', TenantSchema);
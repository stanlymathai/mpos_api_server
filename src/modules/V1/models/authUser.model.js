const mongoose = require("mongoose");

const authUserSchema = new mongoose.Schema(
  {
    merchant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Merchant",
      required: true,
    },
    mPinHash: {
      required: true,
      type: String,
    },
    secretOrKey: {
      type: String,
      unique: true,
      required: true,
    },
    mPinResetToken: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["Super-Admin", "Administrator", "Staff", "Normal"],
    },
    status: {
      type: String,
      required: true,
      enum: ["ACTIVE", "INACTIVE", "PENDING", "SUSPENDED"],
    },
    lastLoginAt: {
      type: Date,
    },
    loginCount: {
      type: Number,
      default: 0,
    },
    mustChangePin: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(_, ret) {
        delete ret.mPinHash;
        delete ret.secretOrKey;
        delete ret.mPinResetToken;
        return ret;
      },
    },
  }
);

authUserSchema.index({ secretOrKey: 1 });

authUserSchema.methods.recordLogin = function () {
  this.lastLoginAt = new Date();
  this.loginCount += 1;
  return this.save();
};

module.exports = mongoose.model("AuthUser", authUserSchema);

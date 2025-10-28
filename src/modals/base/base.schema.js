const baseSchema = {
  createdAt: { type: Date, required: true, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
  status: { type: Boolean, default: true },
};

export { baseSchema };

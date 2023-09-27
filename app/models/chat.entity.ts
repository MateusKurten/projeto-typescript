import { model, Schema } from 'mongoose';

export interface IChat {
    admin: number;
    donor: number;
    message: string;
    created_at: Date;
}

export const ChatSchema = new Schema<IChat>(
    {
        admin: { type: 'number', required: true },
        donor: { type: 'number', required: true },
        message: { type: String, required: true },
        created_at: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

export const Chat = model<IChat>('chat', ChatSchema, 'chat');
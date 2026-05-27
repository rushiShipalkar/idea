/**
 * Contact Form Data Contracts
 * Defines the request/response schemas for contact form submissions
 */

import { z } from 'zod';

// ============================================================================
// REQUEST SCHEMA
// ============================================================================

export const contactFormRequestSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s()+-]+$/.test(val),
      'Phone number format invalid'
    ),

  preferredContactMethod: z
    .enum(['email', 'phone'])
    .optional(),
});

export type ContactFormRequest = z.infer<typeof contactFormRequestSchema>;

// ============================================================================
// RESPONSE SCHEMAS
// ============================================================================

export const contactFormSuccessSchema = z.object({
  success: z.literal(true),
  id: z.string().describe('Unique submission ID for tracking'),
  message: z.string().describe('Success message to display to user'),
  nextSteps: z.string().optional().describe('What user should expect next'),
  timestamp: z.string().datetime().describe('When submission was processed'),
});

export type ContactFormSuccess = z.infer<typeof contactFormSuccessSchema>;

export const contactFormErrorSchema = z.object({
  success: z.literal(false),
  error: z.string().describe('Error message'),
  field: z.string().optional().describe('Which field caused the error'),
  details: z.record(z.string()).optional().describe('Field-level error details'),
  timestamp: z.string().datetime(),
});

export type ContactFormError = z.infer<typeof contactFormErrorSchema>;

export const contactFormResponseSchema = z.union([
  contactFormSuccessSchema,
  contactFormErrorSchema,
]);

export type ContactFormResponse = z.infer<typeof contactFormResponseSchema>;

// ============================================================================
// API ERROR RESPONSES
// ============================================================================

export interface ApiErrorResponse {
  status: number; // 400, 500, 503, etc.
  error: string;
  message: string;
  timestamp: string;
  requestId?: string; // For support/debugging
}

// ============================================================================
// EXAMPLE USAGE
// ============================================================================

/*
// Frontend: Validate before submission
const formData = { name, email, message, phone };
const validated = contactFormRequestSchema.parse(formData);

// Backend: Handle request and return response
const response: ContactFormSuccess = {
  success: true,
  id: 'sub_123456',
  message: 'Thank you for contacting IDEIA LLC.',
  nextSteps: 'Check your email for confirmation.',
  timestamp: new Date().toISOString(),
};

// Error handling
const errorResponse: ContactFormError = {
  success: false,
  error: 'Invalid email format',
  field: 'email',
  timestamp: new Date().toISOString(),
};
*/

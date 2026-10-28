import { Router } from 'express';
import { enquiryController } from '../controllers/enquiryController';
import { enquiryRateLimiter } from '../middleware/rateLimiter';

const router = Router();

// Public Health Check
router.get('/health', enquiryController.getHealth);

// Main Enquiry Submissions (with Rate Limiting)
router.post('/enquiries', enquiryRateLimiter, enquiryController.createEnquiry);
// Backward compatibility alias for /api/enquiry
router.post('/enquiry', enquiryRateLimiter, enquiryController.createEnquiry);

export default router;

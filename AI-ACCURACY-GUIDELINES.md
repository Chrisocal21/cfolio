# AI Accuracy Guidelines for ChrisOC Digital Portfolio

## Critical Importance
The AI features on this portfolio directly represent Chris O'Connell's professional reputation. **Inaccurate information damages credibility and can mislead potential clients.** All AI system prompts must be verified against the About page before deployment.

## Verification Process

### Before Updating Any AI System Prompt:
1. **Read the About page** (`src/app/about/page.tsx`) completely
2. **Extract accurate information** from:
   - Skills section (Photography, Web Development, Operations)
   - Experience timeline with job descriptions
   - Education section
3. **Cross-reference** with other portfolio content
4. **Never assume** capabilities not explicitly stated

## Services Offered (Verified)

### Photography (ChrisOCPhoto Division)
✅ **OFFERED:**
- Event Photography (corporate events, conventions, trade shows, special occasions)
- Professional Media Content Creation
- Portrait Photography
- Canon DSLR & GoPro Equipment
- Photo Editing & Retouching (Adobe Photoshop, Illustrator)
- Video Editing (Adobe Premiere - editing only, not full production)
- Client Relations & Project Coordination

### Web Development
✅ **OFFERED:**
- Next.js 14 & React 18 Applications
- TypeScript Development
- HTML, CSS, JavaScript
- C# & Java
- WordPress, Wix, Squarespace Platforms
- Responsive Design & Mobile-First Development
- E-Commerce Platforms
- Modern UI/UX Design

### Operations & Management
✅ **OFFERED:**
- Production Planning & Management
- Team Leadership & Development
- Inventory & Warehouse Logistics
- Safety & Compliance (OSHA, FDA)
- Customer Service Excellence

## Services NOT Offered (Critical)

❌ **DO NOT CLAIM:**
- **Drone Photography** or **Aerial Photography**
- **Wedding Photography** (specializes in events, not weddings specifically)
- **Real Estate Photography**
- **Product Photography** for e-commerce
- **Video Production Services** (offers video *editing* only, not full videography/production)
- **3D Rendering** or **Animation**

### Why This Matters
If the AI chatbot claims Chris offers drone photography, wedding photography, or other services he doesn't provide:
- Potential clients contact with wrong expectations
- Time wasted in back-and-forth clarification
- Professional credibility damaged
- Lost opportunities when clients feel misled
- Portfolio appears unprofessional

## AI System Prompt Structure

### Every AI prompt must include:

1. **Accurate Service Lists**
   - Only services explicitly mentioned in About page
   - Specific technologies and tools actually used
   - Current role and availability status

2. **Explicit "NOT OFFERED" Section**
   - List services commonly asked about but not provided
   - Provides polite redirect to actual services

3. **Accuracy Disclaimer**
   - Instruction to never assume or claim unlisted capabilities
   - Guidance to say "I don't have that information" when uncertain
   - Reminder that responses represent professional reputation

4. **Verification Context**
   - Current job status and availability
   - Geographic location and service areas
   - Contact information
   - Social media handles

## Updated Files (2024)

All system prompts updated with verified information:

1. **`src/app/api/chat/route.ts`**
   - Portfolio Q&A chatbot
   - ✅ Removed "Drone" from photography skills
   - ✅ Added "PHOTOGRAPHY SERVICES NOT OFFERED" section
   - ✅ Added accuracy disclaimer
   - ✅ Updated with complete professional background

2. **`src/app/api/contact-analyze/route.ts`**
   - Contact form inquiry analyzer
   - ✅ Added services offered/not offered lists
   - ✅ Instructions to reduce priority score for non-offered services
   - ✅ Guidance to suggest polite decline for unavailable services

3. **`src/app/api/seo-optimize/route.ts`**
   - SEO content optimizer
   - ✅ Added services NOT offered section
   - ✅ Instructions to never optimize for non-offered service keywords
   - ✅ Focus on event/corporate photography (not weddings, real estate)
   - ✅ Updated target audience descriptions

4. **`src/app/api/explain-code/route.ts`**
   - Code explainer for projects
   - ✅ Updated project descriptions with accurate tech stacks
   - ✅ Specified Next.js 14, React 18, TypeScript versions

## Testing Protocol

### Before Deploying AI Features:

1. **Test Chat Widget:**
   ```
   User: "Do you offer drone photography?"
   Expected: "No, Chris doesn't offer drone or aerial photography. He specializes in event photography, corporate media content, and portrait photography."
   
   User: "Can you photograph my wedding?"
   Expected: "While Chris specializes in event photography, he doesn't specifically focus on wedding photography. He excels at corporate events, conventions, trade shows, and professional media content."
   
   User: "What photography services do you offer?"
   Expected: Should list ONLY: event photography, media content, portraits. Should NOT mention: drone, weddings, real estate, products.
   ```

2. **Test Contact Form Analysis:**
   - Submit inquiry about drone photography
   - Verify analysis notes service not offered
   - Check priority score is appropriately reduced
   - Confirm recommended response suggests alternative services

3. **Test SEO Optimizer:**
   - Run optimization for photography page
   - Verify NO keywords for: drone, aerial, wedding, real estate, product
   - Confirm keywords focus on: event, corporate, media content, portrait

4. **Test Code Explainer:**
   - Ask about project technologies
   - Verify responses match actual tech stack (Next.js 14, React 18, TypeScript)
   - Check no false claims about features not implemented

## Maintenance Checklist

When updating About page or services:

- [ ] Update all 4 API route system prompts
- [ ] Update this guidelines document
- [ ] Test all AI features with new information
- [ ] Verify no false claims generated
- [ ] Document changes in commit message
- [ ] Test edge cases (questions about unavailable services)

## Red Flags - Review Immediately If:

🚨 **Client says:** "I saw on your site you do [service not offered]"
- Review chat widget system prompt
- Test AI responses about that service
- Update prompt if AI is claiming false capabilities

🚨 **Analytics show:** High bounce rate from photography inquiry form
- Could indicate AI is suggesting wrong services
- Review contact-analyze system prompt
- Test with common photography inquiry types

🚨 **SEO shows:** Ranking for wrong keywords (e.g., "drone photography")
- Review SEO optimizer prompt
- Verify keyword suggestions align with actual services
- Update meta tags if needed

## Current Status (December 2024)

✅ All system prompts verified against About page
✅ Explicit "NOT OFFERED" sections added
✅ Accuracy disclaimers included
✅ No compile errors
✅ Ready for testing

⚠️ **Next Steps:**
- Live test all AI features with real queries
- Monitor client inquiries for accuracy issues
- Update prompts if services expand

## Contact for AI Updates

When adding new services or capabilities:
1. Update About page first
2. Then update all 4 AI system prompts
3. Run full testing protocol
4. Document in this file

**Never let AI claim capabilities not explicitly listed in About page.**

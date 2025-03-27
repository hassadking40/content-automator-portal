
import PageLayout from "@/components/layout/PageLayout";

const Privacy = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="Learn how we collect, use, and protect your information"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information from you when you register on our platform, place an order, subscribe to a newsletter, respond to a survey, fill out a form, or enter information on our platform.
          </p>
          <p>
            When ordering or registering on our platform, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, credit card information, or other details to help you with your experience.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>2. How We Use Your Information</h2>
          <p>
            We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the platform, or use certain other platform features in the following ways:
          </p>
          <ul>
            <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
            <li>To improve our platform in order to better serve you.</li>
            <li>To allow us to better service you in responding to your customer service requests.</li>
            <li>To administer a contest, promotion, survey, or other platform feature.</li>
            <li>To quickly process your transactions.</li>
            <li>To send periodic emails regarding your order or other products and services.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2>3. How We Protect Your Information</h2>
          <p>
            We implement a variety of security measures when a user places an order, enters, submits, or accesses their information to maintain the safety of your personal information.
          </p>
          <p>
            All transactions are processed through a gateway provider and are not stored or processed on our servers.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>4. Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>5. Third-Party Links</h2>
          <p>
            Occasionally, at our discretion, we may include or offer third-party products or services on our platform. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>6. COPPA (Children Online Privacy Protection Act)</h2>
          <p>
            We do not specifically market to children under the age of 13 years old.
          </p>
        </section>
        
        <section>
          <h2>7. Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below.
          </p>
          <p>
            Email: privacy@example.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Privacy;

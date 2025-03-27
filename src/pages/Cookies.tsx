
import PageLayout from "@/components/layout/PageLayout";

const Cookies = () => {
  return (
    <PageLayout 
      title="Cookie Policy" 
      description="Information about how we use cookies on our platform"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows our platform or a third-party to recognize you and make your next visit easier and the platform more useful to you.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>
          <ul>
            <li>
              <strong>Authentication</strong> - We use cookies to identify you when you visit our platform and as you navigate our platform.
            </li>
            <li>
              <strong>Status</strong> - We use cookies to help us determine if you are logged into our platform.
            </li>
            <li>
              <strong>Personalization</strong> - We use cookies to store information about your preferences and to personalize the platform for you.
            </li>
            <li>
              <strong>Security</strong> - We use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials, and to protect our platform and services generally.
            </li>
            <li>
              <strong>Analysis</strong> - We use cookies to help us to analyze the use and performance of our platform and services.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2>3. Types of Cookies We Use</h2>
          <p>
            Essential cookies: These cookies are necessary for the platform to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
          </p>
          <p>
            Performance cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our platform. They help us to know which pages are the most and least popular and see how visitors move around the platform.
          </p>
          <p>
            Functionality cookies: These cookies enable the platform to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
          </p>
          <p>
            Targeting cookies: These cookies may be set through our platform by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>4. Managing Cookies</h2>
          <p>
            Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          </ul>
        </section>
        
        <section>
          <h2>5. Updates to This Cookie Policy</h2>
          <p>
            We may update this cookie policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this cookie policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this cookie policy indicates when it was last updated.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Cookies;

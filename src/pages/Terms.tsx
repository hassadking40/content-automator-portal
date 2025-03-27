
import PageLayout from "@/components/layout/PageLayout";

const Terms = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      description="Please read these terms carefully before using our platform"
    >
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our platform.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily use our platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose;</li>
            <li>Attempt to decompile or reverse engineer any software contained in our platform;</li>
            <li>Remove any copyright or other proprietary notations from the materials;</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2>3. Disclaimer</h2>
          <p>
            The materials on our platform are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>4. Limitations</h2>
          <p>
            In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our platform, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>5. Revisions and Errata</h2>
          <p>
            The materials appearing on our platform could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our platform are accurate, complete or current. We may make changes to the materials contained on our platform at any time without notice.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>6. Links</h2>
          <p>
            We have not reviewed all of the sites linked to our platform and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>
        
        <section className="mb-8">
          <h2>7. Site Terms of Use Modifications</h2>
          <p>
            We may revise these terms of use for our platform at any time without notice. By using our platform you are agreeing to be bound by the then current version of these Terms of Service.
          </p>
        </section>
        
        <section>
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default Terms;

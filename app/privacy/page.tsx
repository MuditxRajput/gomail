import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-orange-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">GoMail</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              GoMail ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use our Google Sheets add-on service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              GoMail operates entirely within your Google account using Google Apps Script. We may access:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Google Sheets data that you explicitly choose to use with GoMail</li>
              <li>Gmail drafts that you select for mail merge campaigns</li>
              <li>Basic account information (email address) for authentication purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information solely to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide the mail merge functionality you request</li>
              <li>Send personalized emails through your Gmail account</li>
              <li>Ensure the proper functioning of the GoMail add-on</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Important:</strong> GoMail does not store your data on external servers. All processing occurs
              within Google's infrastructure using Google Apps Script. Your spreadsheet data and email content remain in
              your Google account at all times.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties. Since GoMail
              operates entirely within your Google account, your data is subject to Google's privacy policies and
              security measures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Revoke GoMail's access to your Google account at any time</li>
              <li>Delete the GoMail add-on from your Google Sheets</li>
              <li>Contact us with any privacy-related questions or concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify users of any material changes by
              updating the effective date at the top of this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:gomail-support@example.com" className="text-orange-600 hover:text-orange-700">
                gomail-support@example.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

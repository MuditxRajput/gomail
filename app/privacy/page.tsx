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
       <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: January 1, 2024</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          GoMail ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our Google Sheets add-on service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>GoMail operates entirely within your Google account using Google Apps Script and Google APIs. We may access:</p>
        <ul className="list-disc list-inside my-2 space-y-1">
          <li>Google Sheets data that you explicitly choose to use with GoMail</li>
          <li>Gmail drafts that you select for mail merge campaigns</li>
          <li>Basic account information (email address) for authentication purposes</li>
          <li>Google Drive files (such as spreadsheets) that you manually select via the Google Picker interface</li>
        </ul>
        <p className="mt-2 font-medium">
          Note: We only access the specific files you choose, and we do not have access to other files in your Google Drive
          or Google Sheets unless you explicitly select them.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>We use your information solely to:</p>
        <ul className="list-disc list-inside my-2 space-y-1">
          <li>Provide the mail merge functionality you request</li>
          <li>Allow you to select files via the Google Picker API</li>
          <li>Read and process only the data within those selected files</li>
          <li>Send personalized emails through your Gmail account</li>
          <li>Ensure the proper functioning of the GoMail add-on</li>
        </ul>
        <p className="mt-2">
          We do not access or collect any additional files, folders, or personal information beyond what is needed for core functionality.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. File Access and Google Picker API</h2>
        <p>GoMail uses the Google Picker API to allow you to manually choose the specific spreadsheets or documents you'd like GoMail to work with.</p>
        <ul className="list-disc list-inside my-2 space-y-1">
          <li>Only the selected files are accessible to GoMail</li>
          <li>We do not access or scan your entire Google Drive</li>
          <li>You are in complete control over what data GoMail can see and process</li>
        </ul>
        <p className="mt-2">
          This access is limited by using the non-sensitive scope:{" "}
          <code className="bg-gray-100 text-sm px-1 py-0.5 rounded">
            https://www.googleapis.com/auth/drive.file
          </code>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Storage and Security</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>GoMail does not store your data on any external servers.</li>
          <li>All processing occurs within Google's infrastructure using Google Apps Script.</li>
          <li>Your spreadsheet data, file selections, and email content remain entirely within your Google account.</li>
          <li>We do not store or transfer your data outside of Google's secure ecosystem.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties. Since GoMail operates
          entirely within your Google account, your data is subject to Google’s privacy policies and security measures.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside my-2 space-y-1">
          <li>
            Revoke GoMail’s access to your Google account at any time from your{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Account Permissions
            </a>
          </li>
          <li>Delete the GoMail add-on from your Google Sheets</li>
          <li>Contact us with any privacy-related questions or concerns</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify users of any material changes by updating
          the effective date at the top of this policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:<br />
          <strong>Email:</strong>{" "}
          <a href="mailto:muditrajputpersonal@gmail.com" className="text-blue-600 underline">
            muditrajputpersonal@gmail.com
          </a>
        </p>
      </section>
    </main>
    </div>
  )
}

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
              <span className="text-xl font-bold text-gray-900">Gomaily</span>
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
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Effective Date: January 1, 2024</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          GoMail ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Google Sheets Add-on for mail merge functionality.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Access</h2>
        <p>
          GoMail operates entirely within your Google account using Google Apps Script and Google APIs. We may access:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Data within the <strong>active Google Sheet</strong> where the add-on is running</li>
          <li>Gmail drafts that you explicitly select for sending personalized emails</li>
          <li>Your Google Account email address (for quota and plan tracking)</li>
        </ul>
        <p className="mt-2">
          <em>Note:</em> We do <strong>not</strong> access your full Drive or other files — only the active spreadsheet where the add-on is used.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use This Data</h2>
        <p>
          We use your data only for:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Reading data from your spreadsheet</li>
          <li>Sending personalized emails using your Gmail draft</li>
          <li>Updating status and usage tracking in your sheet</li>
        </ul>
        <p className="mt-2">
          We <strong>do not store</strong> or share any of your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Why We Request Spreadsheets Scope</h2>
        <p>
          GoMail uses <code className="bg-gray-100 p-1 rounded">https://www.googleapis.com/auth/spreadsheets</code> to:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Read/write the active spreadsheet</li>
          <li>Update send status in cells</li>
          <li>Implement the full automation experience directly in Google Sheets</li>
        </ul>
        <p className="mt-2">
          Picker or Drive access is <strong>not used</strong> — this scope is essential for in-context usage.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Storage & Security</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>No external data storage – all processing happens via Google Apps Script</li>
          <li>Your data never leaves your Google account</li>
          <li>We don’t persist or transfer your data externally</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Sharing</h2>
        <p>
          We don’t sell or share your information. Your data stays secured within your Google environment and follows Google's security policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Revoke GoMail access from your <a href="https://myaccount.google.com/permissions" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Account</a></li>
          <li>Uninstall the add-on from your Google Sheets</li>
          <li>Contact us anytime regarding your privacy</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes</h2>
        <p>
          We may update this Privacy Policy and will change the "Effective Date" when we do.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
        <p>
          Email: <a href="mailto:muditrajputpersonal@gmail.com" className="text-blue-600 underline">muditrajputpersonal@gmail.com</a>
        </p>
      </section>
    </div>
    </div>
  )
}

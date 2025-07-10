import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
              <span className="text-xl font-bold text-gray-900">Gomailyy</span>
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

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By installing and using Gomailyy, you agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              Gomailyy is a Google Sheets add-on that enables users to send personalized emails using Gmail and
              spreadsheet data. The service operates entirely within your Google account using Google Apps Script
              technology.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use Gomaily in compliance with all applicable laws and regulations</li>
              <li>Not use the service for spam, harassment, or any illegal activities</li>
              <li>Respect Gmail's sending limits and policies</li>
              <li>Obtain proper consent before sending emails to recipients</li>
              <li>Comply with anti-spam laws including CAN-SPAM Act and GDPR</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Availability</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to maintain high availability, Gomaily is provided "as is" without guarantees of
              uninterrupted service. Service availability may be affected by Google's infrastructure, maintenance, or
              other factors beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibent text-gray-900 mb-4">5. Limitations and Restrictions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Gomaily is subject to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Gmail's daily sending limits (500 emails for personal accounts, 2,000 for Google Workspace)</li>
              <li>Google Apps Script execution time limits</li>
              <li>Google's terms of service and acceptable use policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              Gomaily and its original content, features, and functionality are owned by us and are protected by
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              Gomaily is provided "as is" and "as available" without warranties of any kind, either express or implied,
              including but not limited to implied warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Gomaily be liable for any indirect, incidental, special, consequential, or punitive
              damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              You may terminate your use of Gomaily at any time by uninstalling the add-on from your Google Sheets. We
              reserve the right to terminate or suspend access to our service immediately, without prior notice, for
              conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by
              updating the effective date at the top of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:Gomaily-support@example.com" className="text-orange-600 hover:text-orange-700">
                muditrajputpersonal@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

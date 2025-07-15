"use client"
import Head from 'next/head'
import { useState } from 'react'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'what-we-access', title: 'What We Access' },
    { id: 'how-we-use', title: 'How We Use Your Data' },
    { id: 'data-protection', title: 'Data Protection and Security' },
    { id: 'data-sharing', title: 'Data Sharing and Disclosure' },
    { id: 'your-rights', title: 'Your Rights and Control' },
    { id: 'scope-justification', title: 'Scope Justification' },
    { id: 'updates', title: 'Updates to This Policy' },
    { id: 'contact', title: 'Contact Information' }
  ]

  return (
    <>
      <Head>
        <title>Privacy Policy - Gomaily</title>
        <meta name="description" content="Gomaily Privacy Policy - How we protect your data and handle Google API permissions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">Gomaily</h1>
              </div>
              <nav className="flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                <a href="/privacy" className="text-blue-600 font-medium">Privacy Policy</a>
              </nav>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block text-sm py-2 px-3 rounded-md transition-colors ${
                        activeSection === section.id 
                          ? 'bg-blue-100 text-blue-700 font-medium' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="prose prose-lg max-w-none">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                  <p className="text-gray-600 mb-8">
                    <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>

                  <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                    <p className="text-blue-800">
                      Gomaily ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Google Sheets Add-on for mail merge functionality.
                    </p>
                  </div>

                  {/* What We Access */}
                  <section id="what-we-access" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Access</h2>
                    <p className="text-gray-700 mb-6">
                      Gomaily operates entirely within your Google account using Google Apps Script and Google APIs. We may access:
                    </p>

                    <div className="space-y-6">
                      <div className="border-l-4 border-green-400 pl-6">
                        <h3 className="text-xl font-medium text-gray-900 mb-3">Google Sheets Data</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Scope:</strong> <code className="bg-gray-100 px-2 py-1 rounded">https://www.googleapis.com/auth/spreadsheets</code></li>
                          <li><strong>Purpose:</strong> To read contact information, email templates, and merge data from your active spreadsheet</li>
                          <li><strong>Data Accessed:</strong> Cell values, sheet structure, and formatting from the spreadsheet where the add-on is used</li>
                          <li><strong>Note:</strong> We do not access your full Drive or other files — only the active spreadsheet where the add-on is used</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-6">
                        <h3 className="text-xl font-medium text-gray-900 mb-3">Gmail Data</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p><strong>Scope:</strong> <code className="bg-gray-100 px-2 py-1 rounded">https://www.googleapis.com/auth/gmail.send</code></p>
                            <p><strong>Purpose:</strong> To send personalized emails through your Gmail account as part of the mail merge functionality</p>
                            <p><strong>Data Accessed:</strong> Send emails on your behalf using your Gmail account</p>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p><strong>Scope:</strong> <code className="bg-gray-100 px-2 py-1 rounded">https://www.googleapis.com/auth/gmail.readonly</code></p>
                            <p><strong>Purpose:</strong> To verify email templates and check email sending status</p>
                            <p><strong>Data Accessed:</strong> Read access to your Gmail messages for template verification and delivery confirmation</p>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p><strong>Scope:</strong> <code className="bg-gray-100 px-2 py-1 rounded">https://www.googleapis.com/auth/gmail.modify</code></p>
                            <p><strong>Purpose:</strong> To manage email drafts and organize sent emails during the mail merge process</p>
                            <p><strong>Data Accessed:</strong> Create, modify, and delete email drafts; add labels to sent emails</p>
                          </div>
                          
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p><strong>Scope:</strong> <code className="bg-gray-100 px-2 py-1 rounded">https://www.googleapis.com/auth/gmail.compose</code></p>
                            <p><strong>Purpose:</strong> To create and format email drafts with personalized content from your spreadsheet data</p>
                            <p><strong>Data Accessed:</strong> Compose new email messages with merged data</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* How We Use Your Data */}
                  <section id="how-we-use" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
                    <p className="text-gray-700 mb-4">We use your data only for:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Reading contact information and email templates from your Google Sheets</li>
                      <li>Personalizing email content by merging spreadsheet data</li>
                      <li>Sending emails through your Gmail account</li>
                      <li>Tracking email delivery status and managing sent emails</li>
                      <li>Providing mail merge functionality within the Google Sheets environment</li>
                    </ul>
                  </section>

                  {/* Data Protection and Security */}
                  <section id="data-protection" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection and Security</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">Data Storage</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>No External Storage:</strong> We do not store any of your data on external servers</li>
                          <li><strong>Local Processing:</strong> All data processing occurs within Google's secure environment using Google Apps Script</li>
                          <li><strong>Session-Based:</strong> Data is only accessed during active use of the add-on and is not retained between sessions</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">Security Measures</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Encryption:</strong> All data transmission uses HTTPS encryption</li>
                          <li><strong>Google Security:</strong> Your data remains within Google's secure infrastructure and follows Google's security policies</li>
                          <li><strong>Access Controls:</strong> The add-on only accesses data necessary for its functionality and operates under your Google account permissions</li>
                          <li><strong>No Third-Party Sharing:</strong> We do not share your data with any third parties</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">Sensitive Data Handling</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li><strong>Email Content:</strong> Email content and recipient information are processed securely within Google's environment</li>
                          <li><strong>Contact Information:</strong> Personal contact details from your spreadsheets are handled with appropriate security measures</li>
                          <li><strong>Authentication:</strong> All API access uses secure OAuth 2.0 authentication through Google</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Data Sharing and Disclosure */}
                  <section id="data-sharing" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>No Data Selling:</strong> We do not sell your information to third parties</li>
                      <li><strong>No External Sharing:</strong> We do not share your data with external parties</li>
                      <li><strong>Google Environment:</strong> Your data stays secured within your Google environment</li>
                      <li><strong>Legal Compliance:</strong> We may disclose information if required by law or to protect our rights</li>
                    </ul>
                  </section>

                  {/* Your Rights and Control */}
                  <section id="your-rights" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Control</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Access Control:</strong> You can revoke the add-on's access to your data at any time through your Google Account settings</li>
                      <li><strong>Data Deletion:</strong> You can delete the add-on, which will remove its access to your data</li>
                      <li><strong>Transparency:</strong> You can review all permissions requested by the add-on before granting access</li>
                    </ul>
                  </section>

                  {/* Scope Justification */}
                  <section id="scope-justification" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scope Justification</h2>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Required Scopes Explanation</h3>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Gmail Send (gmail.send)</h4>
                        <p className="text-gray-700">Essential for the core mail merge functionality - sending personalized emails to your contacts.</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Gmail Read (gmail.readonly)</h4>
                        <p className="text-gray-700">Necessary for:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                          <li>Verifying email templates and formatting</li>
                          <li>Checking email delivery status</li>
                          <li>Ensuring proper email composition</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Gmail Modify (gmail.modify)</h4>
                        <p className="text-gray-700">Required for:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                          <li>Managing email drafts during the merge process</li>
                          <li>Organizing sent emails with appropriate labels</li>
                          <li>Handling email status updates</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Gmail Compose (gmail.compose)</h4>
                        <p className="text-gray-700">Needed for:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                          <li>Creating email drafts with merged data</li>
                          <li>Formatting emails with personalized content</li>
                          <li>Preparing emails before sending</li>
                        </ul>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Spreadsheets (spreadsheets)</h4>
                        <p className="text-gray-700">Required for:</p>
                        <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                          <li>Reading contact lists and email templates</li>
                          <li>Accessing merge data and configuration</li>
                          <li>Updating send status in the spreadsheet</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Updates to This Policy */}
                  <section id="updates" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
                    <p className="text-gray-700">
                      We may update this Privacy Policy from time to time. When we do, we will change the "Effective Date" at the top of this policy. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                    </p>
                  </section>

                  {/* Contact Information */}
                  <section id="contact" className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                    <p className="text-gray-700">
                      If you have any questions about this Privacy Policy, please contact us at{' '}
                      <a href="mailto:privacy@gomaily.in" className="text-blue-600 hover:underline">
                        privacy@gomaily.in
                      </a>
                    </p>
                  </section>

                  <hr className="my-8 border-gray-200" />
                  
                  <p className="text-sm text-gray-600 italic text-center">
                    This policy complies with Google's API Services User Data Policy and applicable data protection regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p>&copy; 2025 Gomaily. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
                                }h

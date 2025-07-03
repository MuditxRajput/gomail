import Link from "next/link"
import { ArrowRight, Mail, FileSpreadsheet, Zap, Shield, BarChart3, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-orange-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">GoMail</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
                How It Works
              </a>
              <a href="#faq" className="text-gray-600 hover:text-orange-600 transition-colors">
                FAQ
              </a>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6">
                Install for Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Send Personalized Emails Directly from <span className="text-orange-600">Google Sheets</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                GoMail is a powerful YAMM alternative for fast, personalized email campaigns
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-4 text-lg"
                >
                  Install GoMail for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 rounded-full px-8 py-4 text-lg bg-transparent"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-2">Trusted by 10,000+ users</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="flex items-center justify-center space-x-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <FileSpreadsheet className="w-16 h-16 text-green-600" />
                    <p className="mt-2 text-sm font-medium text-gray-700">Google Sheets</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <ArrowRight className="w-8 h-8 text-orange-600" />
                    <div className="mt-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      GoMail
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Mail className="w-16 h-16 text-red-500" />
                    <p className="mt-2 text-sm font-medium text-gray-700">Gmail</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Powerful Features for Email Marketing</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to send personalized emails at scale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Mail Merge</h3>
                <p className="text-gray-600">
                  Use Gmail drafts to create personalized email templates with merge fields
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Auto-Personalized</h3>
                <p className="text-gray-600">Automatically personalize emails using data from your Google Sheets</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Activity</h3>
                <p className="text-gray-600">Optional tracking to monitor email opens and engagement (coming soon)</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h3>
                <p className="text-gray-600">No external servers — everything runs securely in your Google account</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">Get started in just 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Create a Gmail Draft</h3>
              <p className="text-gray-600">
                Write your email template in Gmail with merge fields like {"{{firstName}}"} and {"{{company}}"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Add Contacts to Sheets</h3>
              <p className="text-gray-600">
                Import your contact list to Google Sheets with columns matching your merge fields
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Launch GoMail</h3>
              <p className="text-gray-600">
                Open GoMail from your Google Sheets add-ons menu and send personalized emails instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                How many emails can I send?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                GoMail uses your Gmail account's sending limits. For regular Gmail accounts, you can send up to 500
                emails per day. Google Workspace accounts have higher limits (up to 2,000 emails per day).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                Do you store any data?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                No, we don't store any of your data on external servers. GoMail runs entirely within your Google account
                using Google Apps Script, ensuring your data stays private and secure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-lg border-0 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                What permissions does GoMail need?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                GoMail needs permission to access your Google Sheets (to read contact data) and Gmail (to send emails
                using your drafts). These permissions are standard for mail merge add-ons and are required for the
                service to function.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* About GoMail */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">About GoMail</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Built on Google Apps Script, GoMail is secure, fast, and tailored for solo founders, teachers, marketers,
            and small teams. Our mission is to provide a reliable, privacy-focused alternative to traditional mail merge
            tools that keeps your data where it belongs — in your Google account.
          </p>
          <div className="mt-12 flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">1M+</div>
              <div className="text-gray-600">Emails Sent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Email Campaigns?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of users who trust GoMail for their personalized email marketing
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold"
          >
            Try GoMail Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">GoMail</span>
              </div>
              <p className="text-gray-400 mb-4">
                The secure, privacy-focused alternative to YAMM for personalized email campaigns.
              </p>
              <p className="text-gray-400">
                Support:{" "}
                <a href="mailto:gomail-support@example.com" className="text-orange-400 hover:text-orange-300">
                  gomail-support@example.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GoMail. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

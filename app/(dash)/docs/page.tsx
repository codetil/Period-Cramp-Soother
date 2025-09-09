import { ModeToggle } from "@/components/mode-toggle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    <span >Documentation</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>User Guide</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-2 ml-auto">
              <ModeToggle />
              <UserButton/>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-4 max-w-4xl">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Period Cramp Soother User Guide</h1>
              <p className="text-muted-foreground">
                Your comprehensive guide to using the Period Cramp Soother platform for menstrual health management and wellness support.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Quick Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <a href="#getting-started" className="text-blue-600 hover:underline">• Getting Started</a>
                <a href="#dashboard" className="text-blue-600 hover:underline">• Dashboard Overview</a>
                <a href="#period-tracker" className="text-blue-600 hover:underline">• Period Tracker</a>
                <a href="#ai-chatbot" className="text-blue-600 hover:underline">• AI Wellness Assistant</a>
                <a href="#medication" className="text-blue-600 hover:underline">• Medication Tracker</a>
                <a href="#device-control" className="text-blue-600 hover:underline">• Device Control</a>
                <a href="#washroom-finder" className="text-blue-600 hover:underline">• Washroom Finder</a>
                <a href="#recommendations" className="text-blue-600 hover:underline">• Recommendations</a>
                <a href="#settings" className="text-blue-600 hover:underline">• Settings</a>
              </div>
            </div>

            {/* Getting Started */}
            <div id="getting-started" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">🚀 Getting Started</h2>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">1. Create Your Account</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Visit the Period Cramp Soother platform</li>
                  <li>Click the &ldquo;Login&rdquo; button in the top navigation</li>
                  <li>Choose your preferred sign-up method (email, Google, etc.)</li>
                  <li>Complete your profile with basic information</li>
                </ul>

                <h3 className="text-xl font-semibold">2. First Login & Setup</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>After signing in, you&rsquo;ll be taken to the main dashboard</li>
                  <li>Take a moment to explore the sidebar navigation</li>
                  <li>Consider setting up your period tracker with initial cycle data</li>
                  <li>Review your account settings and preferences</li>
                </ul>

                <h3 className="text-xl font-semibold">3. Platform Overview</h3>
                <p>The platform is organized into several key sections accessible via the left sidebar:</p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-2">
                  <ul className="space-y-2">
                    <li><strong>Dashboard:</strong> Your central hub with overview and period tracker</li>
                    <li><strong>AI Chatbot:</strong> Personal wellness assistant for health guidance</li>
                    <li><strong>Meditation:</strong> Medication tracking and reminder system</li>
                    <li><strong>Recommendation:</strong> Personalized health suggestions</li>
                    <li><strong>Nearby Washroom:</strong> Find clean facilities in your area</li>
                    <li><strong>Settings:</strong> Account preferences and customization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dashboard */}
            <div id="dashboard" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">📊 Dashboard Overview</h2>
              
              <p>Your dashboard is the central hub where you can quickly view and manage your menstrual health data.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-green-600">Device Control Panel</h4>
                    <p className="text-sm">Connect and control IoT heat therapy devices for cramp relief.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-blue-600">Period Tracker Widget</h4>
                    <p className="text-sm">Quick view of your current cycle status and upcoming periods.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold">Navigation Tips</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Use the collapsible sidebar to maximize screen space</li>
                  <li>Click your profile picture in the header for account options</li>
                  <li>Toggle between light and dark themes using the theme switcher</li>
                  <li>Breadcrumbs at the top show your current location</li>
                </ul>
              </div>
            </div>

            {/* Period Tracker */}
            <div id="period-tracker" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">📅 Period Tracker</h2>
              
              <p>Track your menstrual cycle, log symptoms, and gain insights into your patterns.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">How to Use</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Log Your Period:</strong> Mark the start and end dates of your menstrual cycle</li>
                  <li><strong>Track Symptoms:</strong> Record pain levels, mood changes, and other symptoms</li>
                  <li><strong>View Analytics:</strong> Access charts and insights about your cycle patterns</li>
                  <li><strong>Set Reminders:</strong> Get notifications for upcoming periods and important dates</li>
                </ol>

                <h3 className="text-xl font-semibold">Features</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <ul className="space-y-1">
                    <li>• Calendar view of your cycle history</li>
                    <li>• Pain and symptom intensity tracking</li>
                    <li>• Cycle length and regularity analysis</li>
                    <li>• Predictive period forecasting</li>
                    <li>• Export data for healthcare providers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Chatbot */}
            <div id="ai-chatbot" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">🤖 AI Wellness Assistant</h2>
              
              <p>Get personalized health advice and support from our AI-powered chatbot, specialized in women&rsquo;s health and menstrual wellness.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">What You Can Ask</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Period-Related Questions:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• &ldquo;Why is my period irregular?&rdquo;</li>
                      <li>• &ldquo;How can I manage severe cramps?&rdquo;</li>
                      <li>• &ldquo;What&rsquo;s normal cycle length?&rdquo;</li>
                      <li>• &ldquo;When should I see a doctor?&rdquo;</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Wellness & Lifestyle:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• &ldquo;Best foods during menstruation&rdquo;</li>
                      <li>• &ldquo;Exercise recommendations for PMS&rdquo;</li>
                      <li>• &ldquo;Natural pain relief methods&rdquo;</li>
                      <li>• &ldquo;Stress management techniques&rdquo;</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold">How to Use</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Navigate to the &ldquo;AI Chatbot&rdquo; section from the sidebar</li>
                  <li>Type your question in the chat input field</li>
                  <li>Receive real-time, personalized responses</li>
                  <li>Ask follow-up questions for more detailed guidance</li>
                </ol>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm"><strong>Note:</strong> The AI assistant provides general wellness guidance and should not replace professional medical advice. Always consult healthcare providers for serious health concerns.</p>
                </div>
              </div>
            </div>

            {/* Medication Tracker */}
            <div id="medication" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">💊 Medication Tracker</h2>
              
              <p>Keep track of your medications, supplements, and pain relief methods with smart reminders.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Log different types of medications and supplements</li>
                  <li>Set custom dosage schedules and reminders</li>
                  <li>Track effectiveness and side effects</li>
                  <li>Monitor pain relief patterns</li>
                  <li>Generate medication reports for doctors</li>
                </ul>

                <h3 className="text-xl font-semibold">Getting Started</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Go to the &ldquo;Meditation&rdquo; section (Medication Tracker)</li>
                  <li>Click &ldquo;Add New Medication&rdquo; to register your medications</li>
                  <li>Set up dosage times and reminder preferences</li>
                  <li>Log when you take medications and track effectiveness</li>
                </ol>
              </div>
            </div>

            {/* Device Control */}
            <div id="device-control" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">🔧 IoT Device Control</h2>
              
              <p>Connect and control smart devices for menstrual health management, including heat therapy devices and wellness gadgets.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Supported Devices</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Smart heating pads for cramp relief</li>
                  <li>Temperature monitoring devices</li>
                  <li>Wellness tracking sensors</li>
                  <li>Custom IoT health devices</li>
                </ul>

                <h3 className="text-xl font-semibold">Setup Process</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Ensure your device is powered on and in pairing mode</li>
                  <li>From the Dashboard, access the Device Control panel</li>
                  <li>Follow the WiFi setup process to connect your device</li>
                  <li>Configure device settings and preferences</li>
                  <li>Test the connection and start using your smart device</li>
                </ol>
              </div>
            </div>

            {/* Washroom Finder */}
            <div id="washroom-finder" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">🚻 Nearby Washroom Finder</h2>
              
              <p>Quickly locate clean, accessible washroom facilities when you need them most during your menstrual cycle.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>GPS-based location finding</li>
                  <li>Ratings and reviews for cleanliness</li>
                  <li>Accessibility information</li>
                  <li>Real-time availability status</li>
                  <li>Navigation directions</li>
                </ul>

                <h3 className="text-xl font-semibold">How to Use</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Navigate to &ldquo;Nearby Washroom&rdquo; from the sidebar</li>
                  <li>Allow location access when prompted</li>
                  <li>Browse nearby facilities on the map</li>
                  <li>Tap on locations for details and directions</li>
                  <li>Leave reviews to help other users</li>
                </ol>
              </div>
            </div>

            {/* Recommendations */}
            <div id="recommendations" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">⭐ Personal Recommendations</h2>
              
              <p>Receive AI-powered personalized recommendations based on your cycle data, symptoms, and health patterns.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Types of Recommendations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-purple-600">Lifestyle Tips</h4>
                    <p className="text-sm">Exercise routines, dietary suggestions, and wellness practices</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-red-600">Pain Management</h4>
                    <p className="text-sm">Natural remedies, positioning techniques, and relief methods</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-green-600">Product Suggestions</h4>
                    <p className="text-sm">Menstrual products, supplements, and wellness items</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-blue-600">Timing Insights</h4>
                    <p className="text-sm">Best times for activities, rest, and self-care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div id="settings" className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">⚙️ Settings & Preferences</h2>
              
              <p>Customize your experience with personal preferences, notifications, and privacy settings.</p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Available Settings</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Profile Information:</strong> Update personal details and health information</li>
                  <li><strong>Notification Preferences:</strong> Customize reminders and alerts</li>
                  <li><strong>Privacy Controls:</strong> Manage data sharing and account visibility</li>
                  <li><strong>Theme Settings:</strong> Choose between light and dark modes</li>
                  <li><strong>Data Export:</strong> Download your health data and reports</li>
                  <li><strong>Account Security:</strong> Password changes and two-factor authentication</li>
                </ul>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">🔧 Troubleshooting & Support</h2>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Common Issues</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Device Won&rsquo;t Connect</h4>
                    <p className="text-sm">Ensure WiFi is enabled, device is in pairing mode, and you&rsquo;re connected to a 2.4GHz network.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Missing Notifications</h4>
                    <p className="text-sm">Check browser notification permissions and your notification settings in the Settings page.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Data Sync Issues</h4>
                    <p className="text-sm">Refresh the page or log out and back in. Check your internet connection.</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold">Getting Help</h3>
                <p>Need additional support? Here are your options:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Use the AI Chatbot for instant help with platform questions</li>
                  <li>Check the GitHub repository for technical issues and updates</li>
                  <li>Contact our support team through the settings page</li>
                  <li>Join our community discussions for peer support</li>
                </ul>
              </div>
            </div>

            {/* Footer Info */}
            <div className="border-t pt-6 mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Information</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Period Cramp Soother is built with modern web technologies including Next.js, TypeScript, and AI integration for the best user experience.
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Platform:</strong> Web-based application</p>
                    <p><strong>AI Technology:</strong> Groq LLaMA 3.3 70B for chat assistance</p>
                    <p><strong>Authentication:</strong> Clerk enterprise-grade security</p>
                    <p><strong>Data:</strong> Encrypted and GDPR compliant</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                  <div className="space-y-2 text-sm">
                    <p><a href="/dashboard" className="text-blue-600 hover:underline">→ Go to Dashboard</a></p>
                    <p><a href="/chatbot" className="text-blue-600 hover:underline">→ AI Wellness Assistant</a></p>
                    <p><a href="/settings" className="text-blue-600 hover:underline">→ Account Settings</a></p>
                    <p><a href="https://github.com/codetil/Period-Cramp-Soother" className="text-blue-600 hover:underline">→ GitHub Repository</a></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
import React, { useState } from "react";
import { Book, Zap, Code, Users, Github } from "lucide-react";

import Documentation from "@/components/documentation/index";
import Header from "@/components/Header/index";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "contributors", label: "Contributors Guide", icon: Users },
    { id: "getting-started", label: "Getting Started", icon: Zap },
    { id: "opensource", label: "Open Source", icon: Code },
    { id: "community", label: "Community", icon: Users },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Negative offset for 64px header height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-background ">
      {/* Header */}
      <Header bgColor="bg-white" borderColor="border-gray-200" state="docs" />

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside
            className={`md:w-64 w-full md:flex-shrink-0 ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="sticky top-24 bg-white md:bg-transparent rounded-lg shadow md:shadow-none p-4 md:p-0">
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                  >
                    <item.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex flex-col flex-grow px-4 sm:px-6 lg:px-8">
            {/*Documentation*/}
            <Documentation />

            {/* Community */}
            <section
              id="community"
              className="mb-8 sm:mb-12 lg:mb-16 scroll-mt-24"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Community
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Contribute, explore our docs, and connect with others through
                  GitHub and our blog.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* GitHub */}
                  <div className="text-center p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Github className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      GitHub
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                      Contribute to our codebase, report issues, and suggest
                      improvements.
                    </p>
                    <a
                      href="https://github.com/your-repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                    >
                      Visit Repository →
                    </a>
                  </div>

                  {/* Blog */}
                  <div className="text-center p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Book className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      Blog
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                      Read tutorials, updates, and contributor stories.
                    </p>
                    <a
                      href="/blog"
                      className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                    >
                      Read Articles →
                    </a>
                  </div>

                  {/* New Contributor Guide */}
                  <div className="text-center p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      New Contributor Guide
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                      Start contributing with our easy onboarding docs.
                    </p>
                    <a
                      href="#contributors"
                      className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm"
                    >
                      View Guide →
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

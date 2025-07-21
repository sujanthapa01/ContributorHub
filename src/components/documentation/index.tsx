import React, { useState } from 'react';
import {
  Code,
  Users,
  Github,
} from 'lucide-react';
import Opensource from './opensource';
import Contributors from './contributros';

const index:React.FC=() => {
  return (
    <>  <section className="mb-8 sm:mb-12 lg:mb-16 scroll-mt-24">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4 sm:mb-6" id='contributors'>
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contributors Guide</h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Welcome to the ContributorHub contributors community! We're excited to have you join us in making ContributorHub better for everyone.
                  This guide will help you get started with contributing to our project.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">First Open-Source Contribution</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      New contributors can make their first open-source contribution by forking the project and running a Python script that adds their GitHub profile info to the contributors list.
                      This automated script fetches your GitHub data using your username and updates the contributors JSON file.
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                      <li>• Fork the project repository</li>
                      <li>• Run the Python script with your GitHub username</li>
                      <li>• Your contribution will appear on the project website</li>
                      <li>• Great way to get started and showcase your participation</li>
                    </ul>
                  </div>

                  {/* Advanced / Infrastructure Contributions */}
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Open-Source Project Contributions</h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                      Experienced contributors can work on improving the repository by fixing issues, developing new features, and enhancing the project infrastructure to make DocuFlow better for everyone.
                    </p>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                      <li>• Work on issues and bug fixes</li>
                      <li>• Add new features and improvements</li>
                      <li>• Enhance tooling, and repository structure</li>
                      <li>• Collaborate to make DocuFlow more robust and scalable</li>
                    </ul>
                  </div>
                </div>

                {/* Getting Started Steps */}
                <div className="mb-8 sm:mb-10" id="getting-started">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Getting Started with Contributions
                  </h3>

                  <p className="text-base sm:text-lg text-gray-700 mb-8">
                    Whether you are making your first open-source contribution or you are an experienced developer working on advanced features and improvements, this guide will help you contribute to DocuFlow effectively.
                  </p>

                  {/* Beginner Contributors Section */}
                  <Contributors/>
                  {/* Experienced Contributors Section */}  
                  <Opensource  />

                </div>



                {/* Quick Tips */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 sm:p-6 border border-emerald-200">
                  <h4 className="text-base sm:text-lg font-semibold text-emerald-800 mb-3 sm:mb-4">💡 Quick Tips for Success</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-emerald-700">
                    <ul className="space-y-1 sm:space-y-2">
                      <li>• Always sync with upstream before starting work</li>
                      <li>• Keep commits focused and atomic</li>
                      <li>• Write tests for your changes when applicable</li>
                      <li>• Follow the existing code style and conventions</li>
                    </ul>
                    <ul className="space-y-1 sm:space-y-2">
                      <li>• Ask questions in discussions if you're unsure</li>
                      <li>• Reference issue numbers in your commits</li>
                      <li>• Be patient during the review process</li>
                      <li>• Thank reviewers and address feedback promptly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section></>
  )
}

export default index
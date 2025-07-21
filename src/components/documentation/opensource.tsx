import React from "react";

const opensource: React.FC = () => {
  return (
    <>
      {" "}
      {/* Experienced Contributors Section */}
      <section className="mb-10" id="opensource">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          For Experienced Contributors: Improving ContributorHub
        </h4>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Experienced contributors can work on fixing bugs, adding new features,
          improving project infrastructure.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Step 1: Fork and Clone */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Fork and Clone the Repository
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Fork and clone the ContributorHub repo:
              </p>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre">
                  {`git clone https://github.com/YOUR_USERNAME/ContributorHub.git
cd ContributorHub
git remote add upstream https://github.com/original/ContributorHub.git`}
                </code>
              </div>
            </div>
          </div>

          {/* Step 2: Create a Branch & Work */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Create a New Branch & Implement Your Changes
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Always create a new branch before working on your changes. Use
                descriptive branch names including your GitHub username to make
                it easy to track contributions.
              </p>

              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre">
                  {`git checkout -b feature/YOUR_USERNAME-description-of-work
# Examples:
# git checkout -b feature/johndoe-new-ui
# git checkout -b fix/johndoe-bug-42
# git checkout -b docs/johndoe-update-readme`}
                </code>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800 mb-2 text-sm sm:text-base">
                    Good Branch Names
                  </h5>
                  <ul className="text-xs sm:text-sm text-purple-700 space-y-1">
                    <li>• feature/johndoe-add-new-feature</li>
                    <li>• fix/johndoe-fix-login-bug</li>
                    <li>• docs/johndoe-update-readme</li>
                    <li>• chore/johndoe-cleanup-code</li>
                  </ul>
                </div>
                <div className="p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">
                    Avoid These Branch Names
                  </h5>
                  <ul className="text-xs sm:text-sm text-red-700 space-y-1">
                    <li>• main, master, develop</li>
                    <li>• fix, feature (too generic)</li>
                    <li>• test, temp, wip</li>
                    <li>• Branch names without your username</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Commit and PR */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Commit, Push & Create Pull Request
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Commit your work with clear messages including your username,
                then push and open a PR.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre">
                  {`git add .
git commit -m "feat(johndoe): improve dark mode toggle "
git push origin feature/johndoe-improve-dark-mode`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default opensource;

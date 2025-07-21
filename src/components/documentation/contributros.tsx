import React from "react";
const contributros: React.FC = () => {
  return (
    <>
      <section className="mb-10">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          For New Contributors: Your First Open-Source Contribution
        </h4>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          This is a friendly path for beginners to get started. You'll fork the
          project, run a simple Python or npm script that adds your GitHub
          profile to the contributors list automatically, and then submit your
          first pull request.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Step 1: Fork and Clone */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Fork and Clone the Repository
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Fork the{" "}
                <code className="language-bash">
                  <span className="text-green-700 font-extrabold">
                    ContributorHub
                  </span>
                </code>{" "}
                repo on GitHub and clone it locally:
              </p>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre">
                  {`git clone https://github.com/YOUR_USERNAME/ContributorHub.git
                                cd ContributorHub`}
                </code>
              </div>
            </div>
          </div>

          {/* Step 2: Create a New Branch */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Create a New Branch
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Always work on a new branch for your contributions. Use a
                descriptive branch name that includes your GitHub username.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre">
                  {`git checkout -b feature/YOUR_USERNAME
# Example:
# git checkout -b feature/johndoe
`}
                </code>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
                    Good Branch Names
                  </h5>
                  <ul className="text-xs sm:text-sm text-blue-700 space-y-1">
                    <li>• feature/johndoe</li>
                  </ul>
                </div>
                <div className="p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">
                    Avoid These
                  </h5>
                  <ul className="text-xs sm:text-sm text-red-700 space-y-1">
                    <li>• main, master, develop</li>
                    <li>• fix, feature (too generic)</li>
                    <li>• test, temp, wip</li>
                    <li>• Branch names without username</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Install Python (if needed) */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Install Python (if not installed)
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                The contributor script requires Python 3. Install it if you
                haven’t yet:
              </p>
              <p className="text-xs sm:text-sm text-gray-600 italic">
                Verify by running:
                <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre">
                    python3 --version
                  </code>
                </div>
              </p>
            </div>
          </div>

          {/* Step 4: Run the Contributor Script */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Run the Contributor Script
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Add your GitHub profile to the contributors list automatically:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-900 rounded-lg p-3 sm:p-4">
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">
                    npm run contributor_add YOUR_GITHUB_USERNAME
                  </code>
                </div>
                <p className="text-black">or</p>
                <div className="bg-gray-900 rounded-lg p-3 sm:p-4">
                  <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-nowrap">
                    python3 scripts/contributor_add.py YOUR_GITHUB_USERNAME
                  </code>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-blue-700 mt-3">
                Example:{" "}
                <code className="bg-blue-100 px-1 rounded text-xs">
                  npm run contributor_add johndoe
                </code>
              </p>
            </div>
          </div>

          {/* Step 5: Commit and Push */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div className="flex-grow">
              <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Commit Your Changes & Create a Pull Request
              </h5>
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                Commit the updated contributors JSON file with a clear message
                and push your branch:
              </p>
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 overflow-x-auto">
                <code className="text-green-400 font-mono text-xs sm:text-sm whitespace-pre">
                  {`git add contributors.json
git commit -m "feat(johndoe): add myself as contributor @YOUR_GITHUB_USERNAME"
git push origin your-branch-name`}
                </code>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                Then open a pull request on GitHub describing your contribution!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contributros;

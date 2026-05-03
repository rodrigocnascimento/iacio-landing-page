import React from 'react';

const DocumentationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-dark-gray">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <a href="/" className="flex-shrink-0 flex items-center">
                <img src="/assets/logo.svg" alt="IACIO" className="h-8 w-8 mr-3" />
                <span className="self-center text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-deep-blue to-cyan">IACIO</span>
              </a>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <a href="/" className="text-dark-gray hover:text-cyan transition-colors font-medium">Home</a>
              <a href="/docs" className="text-dark-gray hover:text-cyan transition-colors font-medium font-bold">Documentation</a>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-deep-blue to-cyan">
          Technical Documentation
        </h1>
        
        <div className="space-y-12">
          {/* Overview Section */}
          <section>
            <h2 className="text-2xl font-bold text-deep-blue mb-6 flex items-center">
              Overview
            </h2>
            <p className="text-dark-gray/80 leading-relaxed">
              O <strong>iacio</strong> é um utilitário CLI que permite executar comandos Node.js carregando variáveis de ambiente e configurações definidas no <code>.vscode/launch.json</code>. 
              Ele foi projetado para ser usado fora do VS Code, permitindo que desenvolvedores reaproveitem configurações de debug e ambiente já existentes em qualquer terminal.
            </p>
          </section>
          
          {/* Architecture Section */}
          <section>
            <h2 className="text-2xl font-bold text-deep-blue mb-6 flex items-center">
              System Architecture
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-center py-8">
                <div className="w-full h-96 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center text-deep-blue/50">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">System Architecture Diagram</h3>
                    <p className="text-sm">Terminal → main() → extractInspectFlags → findLaunchJson → parseLaunchJson → ...</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section>
            <h2 className="text-2xl font-bold text-deep-blue mb-6 flex items-center">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">🚀 Direct Execution</h3>
                <p className="text-dark-gray/70">
                  Run npm run start, ts-node src/index.ts and other commands loading variables from launch.json.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">🕹️ Interactive Mode</h3>
                <p className="text-dark-gray/70">
                  Use without arguments to choose configuration via autocomplete menu (@inquirer/prompts).
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">🐛 Automatic Debugger</h3>
                <p className="text-dark-gray/70">
                  Native support for --inspect, --inspect-brk and --inspect=PORT.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">🪵 Debug Mode</h3>
                <p className="text-dark-gray/70">
                  Use -d or --debug to view detailed logs of command resolution, environment and execution.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">📁 Intelligent Search</h3>
                <p className="text-dark-gray/70">
                  Finds launch.json in root or in src/.vscode/.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">🎯 OutDir Discovery</h3>
                <p className="text-dark-gray/70">
                  Detects compilerOptions.outDir from tsconfig.json and adjusts paths automatically.
                </p>
              </div>
            </div>
          </section>
          
          {/* Debugger Strategy Section */}
          <section>
            <h2 className="text-2xl font-bold text-deep-blue mb-6 flex items-center">
              Debugger Strategy (3 Phases)
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-4 flex items-center">
                  Phase 1: Npm Script Extraction (~70% of cases)
                </h3>
                <p className="text-dark-gray/70 mb-3">
                  When the command is a script runner (npm run, yarn, pnpm), iacio reads package.json, extracts the script and executes directly with node --inspect.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <pre className="p-4 rounded-lg text-deep-blue/80 text-sm font-mono">
{`# launch.json
"command": "npm run start"

# package.json
"scripts": { "start": "node src/index.js" }

# iacio executes:
node --inspect node src/index.js`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-4 flex items-center">
                  Phase 2: Compound Commands (~20% of cases)
                </h3>
                <p className="text-dark-gray/70 mb-3">
                  When the command has pre-commands with && (ex: cd src && npm run start), they are broken into pre-commands and final command with --inspect.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <pre className="p-4 rounded-lg text-deep-blue/80 text-sm font-mono">
{`# launch.json
"command": "cd src && npm i && npm run start"

# iacio executes:
# 1. cd src
# 2. npm i
# 3. node --inspect node src/index.js`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-4 flex items-center">
                  Phase 3: Bootloader (~10% of cases - Fallback)
                </h3>
                <p className="text-dark-gray/70 mb-3">
                  When it's not possible to extract the command (ex: docker-compose up), a bootloader is injected via NODE_OPTIONS to intercept Node.js child processes and inject --inspect automatically.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <pre className="p-4 rounded-lg text-deep-blue/80 text-sm font-mono">
{`# launch.json
"command": "docker-compose up"

# iacio defines:
NODE_OPTIONS="--require /tmp/iacio-bootloader-xxx.js"
IACIO_BOOTLOADER_OPTIONS={ "inspectFlags": ["--inspect"] }`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
          
          {/* Usage Examples Section */}
          <section>
            <h2 className="text-2xl font-bold text-deep-blue mb-6 flex items-center">
              Usage Examples
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">Simple Configuration (type: "node")</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="p-4 rounded-lg text-deep-blue/80 text-sm font-mono">
{`// launch.json
{
  "configurations": [
    {
      "name": "API Development",
      "type": "node",
      "program": "${workspaceFolder}/src/index.js",
      "env": { "PORT": "3000" }
    }
  ]
}

// Execution:
iacio list --inspect
// → node --inspect /projeto/src/index.js`}
                  </pre>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-hover">
                <h3 className="font-bold text-deep-blue mb-3">Terminal Configuration (type: "node-terminal")</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="p-4 rounded-lg text-deep-blue/80 text-sm font-mono">
{`// launch.json
{
  "configurations": [
    {
      "name": "API Start",
      "type": "node-terminal",
      "command": "npm run start"
    }
  ]
}

// package.json:
{
  "scripts": {
    "start": "node src/index.js"
  }
}

// Execution:
iacio list --inspect
// → node --inspect node src/index.js (extracted from package.json)`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocumentationPage;
import React from 'react';
import { 
  Camera, 
  Zap, 
  Shield, 
  Factory, 
  ShoppingCart, 
  Home,
  CheckCircle,
  TrendingUp,
  Brain,
  Leaf,
  AlertTriangle,
  Smartphone
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Smart Sorting</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#technology" className="text-gray-700 hover:text-green-600 transition-colors">Technology</a>
              <a href="#scenarios" className="text-gray-700 hover:text-green-600 transition-colors">Use Cases</a>
              <a href="#benefits" className="text-gray-700 hover:text-green-600 transition-colors">Benefits</a>
              <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">Get Started</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing Food Quality Control with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> AI Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Smart Sorting leverages cutting-edge transfer learning to automatically identify rotten fruits and vegetables, 
              transforming quality control across the agricultural and food industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105">
                Explore Technology
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Technology Overview */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Transfer Learning Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system adapts pre-trained deep learning models to identify rotten produce with unprecedented accuracy, 
              revolutionizing quality control processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Detection</h3>
              <p className="text-gray-600">
                High-speed image processing that analyzes produce in real-time, ensuring efficient quality control without slowing down operations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast Processing</h3>
              <p className="text-gray-600">
                Powered by optimized neural networks that can process thousands of items per hour with minimal computational overhead.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">99.5% Accuracy</h3>
              <p className="text-gray-600">
                Trained on vast datasets of fresh and rotten produce, achieving industry-leading accuracy in quality detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section id="scenarios" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Smart Sorting transforms quality control across different industries and environments.
            </p>
          </div>
          
          {/* Scenario 1: Food Processing */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
                      <Factory className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Food Processing Plants</h3>
                      <p className="text-gray-600">Industrial Scale Quality Control</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Transform your processing facility with automated quality control. Our system replaces manual sorting 
                    with precise AI-powered detection, processing thousands of items per hour while reducing labor costs 
                    and eliminating human error.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Automated conveyor belt integration</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">24/7 continuous operation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Reduced labor costs by 70%</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-orange-100 to-red-100 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Factory className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Process 50,000+ items/hour</p>
                    <p className="text-orange-600 font-medium">With 99.5% accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 2: Supermarkets */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-green-100 p-8 lg:p-12 flex items-center justify-center order-2 md:order-1">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingCart className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Ensure 100% freshness</p>
                    <p className="text-blue-600 font-medium">Before stocking shelves</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 lg:p-12 order-1 md:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <ShoppingCart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Supermarket Chains</h3>
                      <p className="text-gray-600">Reception & Quality Assurance</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Maintain your reputation for quality by implementing smart sorting at receiving docks. 
                    Scan entire shipments in real-time, ensuring only the freshest produce reaches your customers 
                    while reducing waste and enhancing customer satisfaction.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Real-time shipment scanning</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Enhanced customer satisfaction</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Reduced waste by 60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scenario 3: Smart Homes */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Smart Home Integration</h3>
                      <p className="text-gray-600">Intelligent Refrigerator Monitoring</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Transform your kitchen with intelligent food monitoring. Our smart fridge integration continuously 
                    watches your produce, sending alerts to your smartphone when items need attention, helping families 
                    reduce waste and save money.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Smartphone className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Smartphone app notifications</span>
                    </div>
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Proactive freshness alerts</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Reduce household waste by 40%</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-green-100 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Home className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-800">24/7 monitoring</p>
                    <p className="text-green-600 font-medium">Save $500+ annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Smart Sorting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of quality control with measurable benefits across all applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">70%</p>
              <p className="text-gray-600">Labor cost savings</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accuracy</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">99.5%</p>
              <p className="text-gray-600">Detection precision</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">50K</p>
              <p className="text-gray-600">Items per hour</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Waste Reduction</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">60%</p>
              <p className="text-gray-600">Less food waste</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Quality Control?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join industry leaders who are already using Smart Sorting to revolutionize their operations and reduce waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Smart Sorting</span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing food quality control with AI-powered transfer learning technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Food Processing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retail & Supermarkets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Home Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Smart Sorting. All rights reserved. Powered by advanced transfer learning technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
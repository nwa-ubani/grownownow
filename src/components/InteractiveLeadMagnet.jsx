import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, Award, TrendingUp, AlertTriangle, AlertCircle, ChevronRight, Calendar } from 'lucide-react';

const InteractiveLeadMagnet = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [currentSection, setCurrentSection] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const sections = [
    {
      title: "Signup Experience",
      subtitle: "The first impression that determines trust",
      items: [
        {
          id: "signup_1",
          title: "Clear Value Proposition on Signup Page",
          description: "Your signup page clearly explains what the user will get and why they should care. No confusion about what happens next."
        },
        {
          id: "signup_2", 
          title: "Minimal Form Fields (3 or Fewer)",
          description: "You're only asking for essential information. Every additional field reduces conversions by 5-10%."
        },
        {
          id: "signup_3",
          title: "Social Proof Visible During Signup", 
          description: "Users can see testimonials, user counts, company logos, or reviews before committing to sign up."
        },
        {
          id: "signup_4",
          title: "Mobile-Optimized Signup Process",
          description: "The signup experience works flawlessly on mobile devices (where 60%+ of your traffic likely comes from)."
        },
        {
          id: "signup_5",
          title: "Thank You Page Confirms Next Steps",
          description: "After signup, users immediately know what to expect and when to expect it."
        }
      ]
    },
    {
      title: "Welcome & Onboarding Sequence",
      subtitle: "The critical first 24-48 hours that determine engagement",
      items: [
        {
          id: "welcome_1",
          title: "Welcome Email Sends Within 5 Minutes",
          description: "Your first email arrives immediately while excitement and memory of signing up is still fresh."
        },
        {
          id: "welcome_2",
          title: "First Email Focuses on ONE Clear Action",
          description: "Instead of overwhelming with options, you guide users to complete one specific, valuable action."
        },
        {
          id: "welcome_3",
          title: "Personal Welcome (Not Just \"Hi {first_name}\")",
          description: "Your welcome acknowledges why they signed up and what specific problem you'll help them solve."
        },
        {
          id: "welcome_4",
          title: "Sets Expectations for What's Next",
          description: "Users know exactly what emails they'll receive, how often, and what value each will provide."
        },
        {
          id: "welcome_5",
          title: "Provides Quick Win or Immediate Value",
          description: "Within the first interaction, users get something useful—a tip, tool, insight, or result they can use right away."
        }
      ]
    },
    {
      title: "First-Use Experience", 
      subtitle: "The make-or-break moment when users decide if your product delivers",
      items: [
        {
          id: "firstuse_1",
          title: "Clear Next Step After Login",
          description: "Users immediately know what to do first—no blank dashboard or overwhelming feature list."
        },
        {
          id: "firstuse_2",
          title: "Progressive Disclosure (Not Feature Overload)",
          description: "You introduce features gradually based on user progress, not all at once."
        },
        {
          id: "firstuse_3",
          title: "Success Metrics Are Defined",
          description: "Users understand what \"success\" looks like and can track their progress toward it."
        },
        {
          id: "firstuse_4",
          title: "Help/Support Is Easily Accessible",
          description: "When users get stuck, they can quickly find help without leaving the product."
        },
        {
          id: "firstuse_5",
          title: "User Can Complete Core Action in Under 5 Minutes",
          description: "The main value of your product can be experienced quickly, building confidence and momentum."
        }
      ]
    },
    {
      title: "Engagement & Nurturing",
      subtitle: "How you maintain relationships and guide users toward deeper engagement", 
      items: [
        {
          id: "engagement_1",
          title: "Email Frequency Matches User Behavior",
          description: "Active users get different email cadence than inactive ones. Engagement level determines communication frequency."
        },
        {
          id: "engagement_2",
          title: "Content Matches Signup Source/Intent",
          description: "Someone who signed up from a Facebook ad about \"productivity tips\" gets different emails than someone from a LinkedIn post about \"team management.\""
        },
        {
          id: "engagement_3",
          title: "Personalization Beyond Name",
          description: "You use behavioral data, preferences, or past actions to customize content, not just insert first names."
        },
        {
          id: "engagement_4",
          title: "Multiple Content Formats Available",
          description: "Your nurturing includes emails, in-app messages, push notifications, or other touchpoints as appropriate."
        },
        {
          id: "engagement_5",
          title: "Re-engagement Campaigns for Inactive Users",
          description: "You have specific sequences to win back users who haven't engaged recently."
        }
      ]
    },
    {
      title: "Conversion & Monetization",
      subtitle: "How you guide free users toward becoming paying customers",
      items: [
        {
          id: "conversion_1",
          title: "Upgrade Prompts at Strategic Moments", 
          description: "Conversion opportunities appear when users hit natural limitations or experience high value, not randomly."
        },
        {
          id: "conversion_2",
          title: "Social Proof Throughout Journey",
          description: "Customer success stories, usage statistics, and testimonials reinforce buying decisions at key moments."
        },
        {
          id: "conversion_3",
          title: "Objections Are Addressed Proactively",
          description: "Your content and messaging anticipate and resolve common concerns before users even voice them."
        },
        {
          id: "conversion_4",
          title: "Multiple Conversion Opportunities",
          description: "Users have several chances to upgrade through different touchpoints and contexts, not just one email blast."
        },
        {
          id: "conversion_5",
          title: "Clear Pricing and Value Communication",
          description: "The cost and benefits of upgrading are transparent and easy to understand at any point in the journey."
        }
      ]
    }
  ];

  const handleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const calculateScore = () => {
    return Object.values(checkedItems).filter(Boolean).length;
  };

  const getSectionScore = (sectionIndex) => {
    const sectionItems = sections[sectionIndex].items;
    return sectionItems.filter(item => checkedItems[item.id]).length;
  };

  const getScoreAnalysis = (score) => {
    if (score >= 20) {
      return {
        level: "EXCELLENT JOURNEY",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        icon: Award,
        description: "You're in the top 10% of businesses. Your customer journey is well-optimized and likely driving strong conversion rates.",
        nextSteps: [
          "A/B test your highest-performing elements",
          "Implement advanced behavioral triggers", 
          "Consider expansion to new customer segments"
        ]
      };
    } else if (score >= 15) {
      return {
        level: "GOOD WITH ROOM FOR IMPROVEMENT",
        color: "text-blue-600", 
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        icon: TrendingUp,
        description: "You have solid fundamentals but significant opportunities for growth. Addressing 2-3 key gaps could dramatically improve your conversion rates.",
        nextSteps: [
          "Prioritize the lowest-scoring section first",
          "Implement quick wins that require minimal resources",
          "Set up better tracking to measure improvements"
        ]
      };
    } else if (score >= 10) {
      return {
        level: "MAJOR GAPS NEED ATTENTION",
        color: "text-orange-600",
        bgColor: "bg-orange-50", 
        borderColor: "border-orange-200",
        icon: AlertTriangle,
        description: "Your customer journey has critical weaknesses that are likely costing you significant revenue. This is actually good news—you have clear opportunities for dramatic improvement.",
        nextSteps: [
          "Focus on Section 1 & 2 first (signup and onboarding)",
          "Audit your current email sequences immediately",
          "Consider getting professional help to accelerate improvements"
        ]
      };
    } else {
      return {
        level: "CRITICAL JOURNEY OVERHAUL NEEDED",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200", 
        icon: AlertCircle,
        description: "Your customer journey is fundamentally broken and bleeding potential revenue. Every day you wait costs money, but the upside potential is enormous.",
        nextSteps: [
          "Stop all other marketing activities until journey is fixed",
          "Start with basic welcome email sequence",
          "Consider hiring lifecycle marketing expertise immediately"
        ]
      };
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowEmailCapture(true);
    }
  };

  const handleEmailSubmit = async () => {
    if (firstName && email) {
      const totalScore = calculateScore();
      
      // Determine lead priority based on score
      let leadPriority = '';
      if (totalScore <= 10) leadPriority = 'HOT - Urgent Need';
      else if (totalScore <= 15) leadPriority = 'WARM - Good Potential';
      else leadPriority = 'COOL - Nurture';
      
      const leadData = {
        firstName: firstName,
        email: email,
        auditScore: totalScore,
        completedAt: new Date().toLocaleString(),
        leadPriority: leadPriority
      };
      
      try {
        // Send lead data to n8n webhook
        await fetch('https://grownownow.app.n8n.cloud/webhook-test/audit-leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData)
        });
        console.log('Lead data sent successfully:', leadData);
      } catch (error) {
        console.error('Error sending lead data:', error);
        // Still show results even if webhook fails
      }
      
      setShowEmailCapture(false);
      setShowResults(true);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/grownownow/customer-journey-strategy-session', '_blank');
  };

  const totalScore = calculateScore();
  const analysis = getScoreAnalysis(totalScore);
  const IconComponent = analysis.icon;

  // Logo component using your actual GrowNowNow logo
  const Logo = () => (
    <div className="flex items-center justify-center mb-6">
      <div className="w-16 h-12 flex items-center justify-center">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <text x="10" y="70" fontSize="48" fontWeight="bold" fill="#2d3748" fontFamily="Arial, sans-serif">
            G
          </text>
          <text x="60" y="50" fontSize="36" fontWeight="bold" fill="#2d3748" fontFamily="Arial, sans-serif">
            R
          </text>
          <circle cx="110" cy="45" r="15" fill="#2d3748"/>
          <circle cx="110" cy="45" r="3" fill="white"/>
          <text x="130" y="70" fontSize="48" fontWeight="bold" fill="#2d3748" fontFamily="Arial, sans-serif">
            W
          </text>
        </svg>
      </div>
    </div>
  );

  // Email capture before results
  if (showEmailCapture) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <Logo />
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Get Your Audit Results</h2>
          <p className="text-gray-600 mb-6 text-center">
            You scored <strong>{calculateScore()}/25</strong>! Enter your details to see your complete analysis and next steps.
          </p>
          
          <div className="space-y-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <button
              onClick={handleEmailSubmit}
              disabled={!firstName || !email}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get My Results
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            We'll email you a copy of your results and action plan.
          </p>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <Logo />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Customer Journey Health Check Results</h1>
          <p className="text-gray-600">Based on your 25-point audit</p>
        </div>

        {/* Score Display */}
        <div className={`${analysis.bgColor} ${analysis.borderColor} border-2 rounded-lg p-6 mb-8 text-center`}>
          <div className="flex items-center justify-center mb-4">
            <IconComponent className={`w-12 h-12 ${analysis.color}`} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Score: {totalScore}/25</h2>
          <h3 className={`text-xl font-semibold ${analysis.color} mb-4`}>{analysis.level}</h3>
          <p className="text-gray-700 mb-6">{analysis.description}</p>
          
          <div className="bg-white rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Your Section Breakdown:</h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {sections.map((section, index) => {
                const sectionScore = getSectionScore(index);
                return (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-800">{sectionScore}/5</div>
                    <div className="text-sm text-gray-600">{section.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-left bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">Your Next Steps:</h4>
            <ul className="space-y-2">
              {analysis.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Turn Your Customer Journey Into a Revenue-Generating Machine?</h3>
          <p className="text-blue-100 mb-6">Get your custom action plan based on your audit results</p>
          
          <button 
            onClick={openCalendly}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Strategy Session
          </button>
          
          <p className="text-blue-200 text-sm mt-4">In our strategy session, we'll review your results and create a specific roadmap to improve your customer journey</p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <Logo />
          </div>
          <p className="text-gray-600 text-sm mb-2">Created by <strong>GrowNowNow</strong></p>
          <p className="text-gray-500 text-sm">Customer lifecycle marketing consultancy helping businesses turn signups into sales</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <Logo />
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Customer Journey Health Check</h1>
        <p className="text-gray-600">25 Critical Points Every Business Must Audit</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm text-gray-600">Section {currentSection + 1} of {sections.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{width: `${((currentSection + 1) / sections.length) * 100}%`}}
          ></div>
        </div>
      </div>

      {/* Current Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Section {currentSection + 1}: {sections[currentSection].title}
          </h2>
          <p className="text-gray-600">{sections[currentSection].subtitle}</p>
          <div className="mt-2">
            <span className="text-sm text-gray-500">
              Score: {getSectionScore(currentSection)}/5
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {sections[currentSection].items.map((item) => (
            <div 
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => handleCheck(item.id)}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {checkedItems[item.id] ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Current Total Score</p>
          <p className="text-2xl font-bold text-blue-600">{totalScore}/25</p>
        </div>

        <button
          onClick={nextSection}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
        >
          {currentSection === sections.length - 1 ? 'See Results' : 'Next Section'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default InteractiveLeadMagnet;

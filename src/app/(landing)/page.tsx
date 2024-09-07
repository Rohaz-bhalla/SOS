'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  EnvironmentOutlined,
  SafetyOutlined,
  PhoneOutlined,
  WifiOutlined,
  UserAddOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Real-Time Location Sharing',
      description:
        'Share your live location with trusted contacts and nearby police stations instantly.',
      icon: <EnvironmentOutlined />,
    },
    {
      heading: 'Immediate SOS Alerts',
      description:
        'Press the SOS button to send an immediate alert to the nearest police station for rapid assistance.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'Offline Functionality',
      description:
        'Stay protected even without internet access through SMS automation.',
      icon: <PhoneOutlined />,
    },
    {
      heading: 'Seamless User Experience',
      description:
        'Enjoy a smooth experience with our intuitive signup and login pages.',
      icon: <UserAddOutlined />,
    },
    {
      heading: 'Live Location Refresh',
      description:
        'Your live location refreshes every 30 seconds to ensure continuous safety.',
      icon: <WifiOutlined />,
    },
    {
      heading: 'Session Management',
      description:
        'Minimize repetitive sign-ins with our cookie-based session management.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'Ananya Sharma',
      designation: 'Student',
      content:
        'This app has given me peace of mind while traveling alone. The SOS feature is a lifesaver!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Ravi Kumar',
      designation: 'Software Engineer',
      content:
        'Knowing my sister can alert authorities instantly makes me feel much more at ease.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Priya Singh',
      designation: 'Marketing Executive',
      content:
        'The offline functionality is brilliant. I feel safe even in areas with poor network coverage.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'FAQ',
      link: '#faq',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential features for personal safety',
      monthly: 9,
      yearly: 69,
      features: ['Real-Time Location Sharing', 'Immediate SOS Alerts'],
    },
    {
      title: 'Premium',
      description: 'Advanced features for enhanced safety',
      monthly: 19,
      yearly: 129,
      features: [
        'All Basic Features',
        'Offline Functionality',
        'Live Location Refresh',
      ],
      highlight: true,
    },
    {
      title: 'Pro',
      description: 'Complete protection with all features',
      monthly: 29,
      yearly: 199,
      features: [
        'All Premium Features',
        'Seamless User Experience',
        'Session Management',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the SOS feature work?',
      answer:
        'When you press the SOS button, an alert is sent to the nearest police station and your trusted contacts.',
    },
    {
      question: 'Can I use the app without internet?',
      answer: 'Yes, the app functions offline through SMS automation.',
    },
    {
      question: 'How often does the live location refresh?',
      answer: 'The live location refreshes every 30 seconds.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use cookies for session management to enhance security and user experience.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Download the App',
      description: 'Get the app from the App Store or Google Play.',
    },
    {
      heading: 'Sign Up',
      description: 'Create your account with essential details.',
    },
    {
      heading: 'Share Your Location',
      description: 'Enable location sharing with trusted contacts.',
    },
    {
      heading: 'Stay Safe',
      description: 'Use the SOS button for immediate assistance when needed.',
    },
  ]

  const painPoints = [
    {
      emoji: '😟',
      title: 'Feeling unsafe while traveling alone',
    },
    {
      emoji: '📶',
      title: 'No internet access in critical moments',
    },
    {
      emoji: '⏳',
      title: 'Delayed response in emergencies',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Empower Your Safety, Anytime, Anywhere"
        subtitle="Stay connected and protected with our SOS app designed for women's safety."
        buttonText="Get Started"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/8WyAew-womensosportal-RRjm"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="Women's Safety is a Critical Issue"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How Our App Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Peace of Mind with Our App"
        subtitle="Our features are designed to keep you safe and connected."
        features={features}
      />
      <LandingTestimonials
        title="Hear from Women Who Feel Safer"
        subtitle="Our app has made a difference in their lives."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose the Right Plan for Your Safety"
        subtitle="Affordable plans to keep you protected."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our app."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Take Control of Your Safety Today"
        subtitle="Download the app and start your journey towards a safer life."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}

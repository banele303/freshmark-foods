import { Metadata } from 'next'
import ContactForm from './contact-form'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | Freshmark Foods',
  description: 'Get in touch with Freshmark Foods for any inquiries or support.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12 px-4 py-6">
        <div>
          <h2 className="text-2xl text-center font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4 text-[17px]">We&apos;d love to hear from you. 
            Please fill out the form below or use our contact information to reach us.</p>
          <div className="space-y-2">
            <p><strong>Address:</strong> 33 Ballyclare Drive, Sandton, Bryanston, 2191</p>
            <p><strong>Phone:</strong> +27 68 389 7638</p>
            <p><strong>Email:</strong> info@freshmarkfoods.com</p>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer/>
    </div>
  )
}


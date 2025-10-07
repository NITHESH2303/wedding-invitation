import { motion } from "framer-motion";

export default function VenueLocation() {
  return (
    <section className="py-16 bg-gradient-to-br from-cream-100 to-peach-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4">
            Venue Location
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us at our beautiful venue for the celebration of a lifetime
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3913.7184263403924!2d78.13255487617319!3d11.20845665107391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDEyJzMwLjQiTiA3OMKwMDgnMDYuNSJF!5e0!3m2!1sen!2sin!4v1759858402884!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
        
        <div className="text-center">
          <motion.a
            href="https://maps.google.com/maps/dir/?api=1&destination=11.208682871210893,78.13609542877394"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-mint-300 via-gentle-300 to-blush-300 hover:from-mint-400 hover:via-gentle-400 hover:to-blush-400 text-navy-800 font-extrabold rounded-full px-8 py-4 text-lg transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 10px 30px rgba(251, 113, 133, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Get Directions
          </motion.a>
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import Image from "next/image";
import StaggeredText from "@/components/StaggeredText";
import ScrollReveal from "@/components/ScrollReveal";
import { DoodleFlower } from "@/components/DoodleArt";

export default function VenueLocation() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-cream-100 to-peach-50">
      {/* Decorative doodles positioned around the edges */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-8 right-8"
          animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/doodles/open-doodles/png/StrollingDoodle.png"
            alt="Strolling doodle"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-8"
          animate={{ y: [0, -4, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Image
            src="/doodles/open-doodles/png/PlantDoodle.png"
            alt="Plant doodle"
            width={35}
            height={35}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-4"
          animate={{ y: [0, -3, 0], rotate: [0, -2, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Image
            src="/doodles/open-doodles/png/IceCreamDoodle.png"
            alt="Ice cream doodle"
            width={28}
            height={28}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-4"
          animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Image
            src="/doodles/open-doodles/png/MessyDoodle.png"
            alt="Messy doodle"
            width={32}
            height={32}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute top-1/4 left-4"
          animate={{ y: [0, -4, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Image
            src="/doodles/open-doodles/png/SprintingDoodle.png"
            alt="Sprinting doodle"
            width={30}
            height={30}
            className="drop-shadow-lg"
          />
        </motion.div>
        
        <motion.div
          className="absolute top-2/3 right-4"
          animate={{ y: [0, -3, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          <Image
            src="/doodles/open-doodles/png/CoffeeDoddle.png"
            alt="Coffee doodle"
            width={26}
            height={26}
            className="drop-shadow-lg"
          />
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <ScrollReveal direction="up" className="text-center mb-12" once={false}>
          {/* Desktop: Single line with flowers */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-8">
            <DoodleFlower className="w-8 h-8 text-pink-400" />
            <StaggeredText
              text="VENUE LOCATION"
              className="text-5xl font-handwritten text-navy-800 tracking-widest-em uppercase transform -rotate-1"
              direction="up"
              once={false}
            />
            <DoodleFlower className="w-8 h-8 text-pink-400" />
          </div>
          
          {/* Mobile: Two lines with flowers */}
          <div className="block md:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DoodleFlower className="w-6 h-6 text-pink-400" />
              <StaggeredText
                text="VENUE"
                className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase transform -rotate-1"
                direction="up"
                once={false}
              />
              <DoodleFlower className="w-6 h-6 text-pink-400" />
            </div>
            <StaggeredText
              text="LOCATION"
              className="text-4xl font-handwritten text-navy-800 tracking-widest-em uppercase transform rotate-1"
              direction="up"
              once={false}
            />
          </div>
          <motion.p
            className="text-xl text-navy-600 max-w-2xl mx-auto leading-emotional font-script"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join us at our beautiful venue for the celebration of a lifetime
          </motion.p>
        </ScrollReveal>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.9836119733377!2d78.13528728050315!3d11.20904457868933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcf7bf710200f%3A0x75d281113825c247!2sSree%20Aishvariya%20Mahal!5e0!3m2!1sen!2sin!4v1759942695318!5m2!1sen!2sin"
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

        <div className="text-center">
          <motion.a
            href="https://maps.google.com/maps/dir/?api=1&destination=11.208191334234352,78.13505783530405"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-mint-300 via-gentle-300 to-blush-300 hover:from-mint-400 hover:via-gentle-400 hover:to-blush-400 text-navy-800 font-extrabold rounded-full px-8 py-4 text-lg transition-all duration-300 shadow-lg"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 30px rgba(251, 113, 133, 0.4)",
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
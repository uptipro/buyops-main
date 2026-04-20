"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ApiAsset {
  id: string;
  name: string;
  title: string;
  location: string;
  fractionCost: string | null;
  finalPrice: number;
  rentalYield: string | null;
  rentalYieldMax: number | null;
  capitalAppreciation: number | null;
  totalAnnualReturn: number;
  constructionStage: string;
  fractionTotal: number | null;
  availableUnits: number | null;
  totalUnits: number | null;
  images: { id: string; url: string; caption: string | null }[];
}

interface PropertyCardProps {
  name: string;
  location: string;
  price: string;
  roi: string;
  status?: string;
  imageUrl?: string;
  fractions: {
    total: number;
    available: number;
  };
}

function PropertyCard({
  name,
  location,
  price,
  roi,
  status,
  imageUrl,
  fractions,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const investorPortalUrl =
    process.env.NEXT_PUBLIC_INVESTOR_PORTAL_URL ?? "https://app.buyops.ng";

  return (
    <motion.div
      className="relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] mx-3 sm:mx-4"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-modern overflow-hidden">
        {/* Property Image */}
        <div className="relative h-44 sm:h-52 md:h-56 bg-gradient-to-br from-blue-50 to-gray-100 mb-5 sm:mb-6 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="380px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-brand-gray">
              <div className="text-center">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <div className="text-sm">Property Image</div>
              </div>
            </div>
          )}
        </div>

        {/* Property Info */}
        <div className="p-5 sm:p-6 pt-0 space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-1">
              {name}
            </h3>
            <p className="text-brand-gray text-sm">{location}</p>
          </div>

          {/* Price */}
          <div>
            <p className="text-xl sm:text-2xl font-bold text-brand-blue">
              ₦{price}
            </p>
            <p className="text-sm text-brand-gray">per fraction</p>
          </div>

          {/* Metadata - Appears on Hover */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              isHovered
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50 rounded-lg space-y-3">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-sm text-brand-gray mb-1">
                    Expected ROI
                  </div>
                  <div className="text-lg font-bold text-green-600">{roi}</div>
                </div>
                <div>
                  <div className="text-sm text-brand-gray mb-1">
                    Development Stage
                  </div>
                  <div className="text-lg font-bold text-brand-dark">
                    {status ?? "—"}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-brand-gray mb-1">
                    Available Fractions
                  </div>
                  <div className="text-lg font-bold text-brand-dark">
                    {fractions.available}/{fractions.total}
                  </div>
                </div>
              </div>

              <a
                href={investorPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                View Details
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

const FALLBACK_PROPERTIES: PropertyCardProps[] = [
  {
    name: "The Grandeur Suites",
    location: "Lekki Phase 1",
    price: "5,000,000",
    roi: "18%",
    status: "Under Construction",
    fractions: { total: 20, available: 8 },
  },
  {
    name: "Emerald Garden",
    location: "Epe, Lagos",
    price: "850,000",
    roi: "15%",
    status: "Land/Development",
    fractions: { total: 30, available: 22 },
  },
  {
    name: "Abuja Smart Hub",
    location: "Maitama",
    price: "12,500,000",
    roi: "12%",
    status: "Completed",
    fractions: { total: 10, available: 3 },
  },
];

function mapApiToCard(a: ApiAsset): PropertyCardProps {
  const roiNum =
    a.totalAnnualReturn ||
    parseFloat((a.rentalYieldMax as any) || a.rentalYield || "0") +
      (a.capitalAppreciation || 0);
  const priceNum = a.finalPrice || parseFloat(a.fractionCost || "0");
  return {
    name: a.title || a.name,
    location: a.location,
    price: priceNum ? priceNum.toLocaleString("en-NG") : "—",
    roi: roiNum > 0 ? `${roiNum}%` : "—",
    status: a.constructionStage || undefined,
    imageUrl: a.images[0]?.url,
    fractions: {
      total: a.fractionTotal ?? a.totalUnits ?? 0,
      available: a.availableUnits ?? 0,
    },
  };
}

export default function FractionalGallery() {
  const [properties, setProperties] =
    useState<PropertyCardProps[]>(FALLBACK_PROPERTIES);

  useEffect(() => {
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ??
      "https://buyops-backend-production.up.railway.app";
    fetch(`${apiUrl}/public/assets`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: ApiAsset[] | null) => {
        if (data && data.length > 0) setProperties(data.map(mapApiToCard));
      })
      .catch(() => {
        /* keep fallback data */
      });
  }, []);

  const investorPortalUrl =
    process.env.NEXT_PUBLIC_INVESTOR_PORTAL_URL ?? "https://app.buyops.ng";
  const duplicatedProperties = [...properties, ...properties];

  return (
    <section id="inventory" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-brand-gray font-secondary mb-3">
            Available Properties
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-primary">
            Featured Properties.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-gray max-w-2xl mx-auto font-secondary">
            Actively managed, legally verified, and ready for acquisition.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <motion.div
          className="flex"
          animate={{
            x: [0, -1600 * 2],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedProperties.map((property, index) => (
            <PropertyCard key={`${property.name}-${index}`} {...property} />
          ))}
        </motion.div>
      </div>

      <div className="container-custom mt-12 sm:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-brand-gray mb-6 font-secondary">
            Hover over any property to reveal detailed insights
          </p>
          <a
            href={investorPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors font-secondary text-base sm:text-lg"
          >
            Explore All Properties
          </a>
        </motion.div>
      </div>
    </section>
  );
}

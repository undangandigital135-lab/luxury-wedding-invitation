"use client";

import { useState, useCallback, useEffect, lazy, Suspense } from "react";
import weddingData from "@/data/wedding";
import { getGuestName } from "@/lib/utils";
import OpeningScreen from "@/components/OpeningScreen";
import AnimatedBackground from "@/components/AnimatedBackground";
import IslamicOrnaments from "@/components/IslamicOrnaments";
import ProgressBar from "@/components/ProgressBar";
import GrainTexture from "@/components/ui/GrainTexture";
import JsonLd from "@/components/JsonLd";
import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero";
import BrideGroom from "@/components/BrideGroom";
import Countdown from "@/components/Countdown";
import LoveStory from "@/components/LoveStory";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import DigitalGift from "@/components/DigitalGift";
import ClosingFooter from "@/components/ClosingFooter";
import AudioControl from "@/components/AudioControl";

// Lazy-loaded non-critical components
const SectionNav = lazy(() => import("@/components/SectionNav"));
const Wishes = lazy(() => import("@/components/Wishes"));
const SocialShare = lazy(() => import("@/components/SocialShare"));

const d = weddingData;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("");

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setGuestName(getGuestName()); }, []);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  return (
    <>
      {/* Structured Data */}
      <JsonLd
        weddingDate={d.weddingDateISO}
        weddingTime={d.weddingTime}
        groomName={d.groom}
        brideName={d.bride}
        location={d.eventDetails.events[0].location}
        address={d.eventDetails.events[0].address}
      />

      {!isOpen && (
        <OpeningScreen
          onOpen={handleOpen}
          arabic={d.opening.arabic}
          translation={d.opening.translation}
          instruction={d.opening.instruction}
          guestName={guestName}
          guestTitle={d.hero.guestTitle}
        />
      )}

      {isOpen && (
        <main className="relative min-h-screen bg-[#2B124C]">
          <ProgressBar />
          <GrainTexture />
          <IslamicOrnaments />
          <AnimatedBackground />

          <ErrorBoundary>
            <Hero
              greeting={d.hero.greeting}
              guestTitle={d.hero.guestTitle}
              guestName={guestName}
              title={d.hero.title}
              subtitle={d.hero.subtitle}
              verse={d.hero.verse}
              verseReference={d.hero.verseReference}
              scrollHint={d.hero.scrollHint}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <BrideGroom
              sectionTitle={d.brideGroom.sectionTitle}
              sectionSubtitle={d.brideGroom.sectionSubtitle}
              bride={d.brideGroom.bride}
              groom={d.brideGroom.groom}
              dividerText={d.brideGroom.dividerText}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <Countdown
              title={d.countdown.title}
              subtitle={d.countdown.subtitle}
              labels={d.countdown.labels}
              message={d.countdown.message}
              weddingDateISO={d.weddingDateISO}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <LoveStory
              title={d.loveStory.title}
              subtitle={d.loveStory.subtitle}
              intro={d.loveStory.intro}
              milestones={d.loveStory.milestones}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <EventDetails
              title={d.eventDetails.title}
              subtitle={d.eventDetails.subtitle}
              intro={d.eventDetails.intro}
              events={d.eventDetails.events}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <Gallery
              title={d.gallery.title}
              subtitle={d.gallery.subtitle}
              images={d.gallery.images}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <RSVP
              title={d.rsvp.title}
              subtitle={d.rsvp.subtitle}
              intro={d.rsvp.intro}
              deadline={d.rsvp.deadline}
              deadlinelabel={d.rsvp.deadlinelabel}
              waNumber={d.rsvp.waNumber}
              waMessage={d.rsvp.waMessage}
              nameLabel={d.rsvp.nameLabel}
              namePlaceholder={d.rsvp.namePlaceholder}
              guestsLabel={d.rsvp.guestsLabel}
              attendanceLabel={d.rsvp.attendanceLabel}
              attendanceOptions={d.rsvp.attendanceOptions}
              submitText={d.rsvp.submitText}
              successMessage={d.rsvp.successMessage}
            />
          </ErrorBoundary>

          <ErrorBoundary>
            <DigitalGift
              title={d.gift.title}
              subtitle={d.gift.subtitle}
              intro={d.gift.intro}
              message={d.gift.message}
              bankName={d.gift.bankName}
              accountNumber={d.gift.accountNumber}
              accountName={d.gift.accountName}
              copyButton={d.gift.copyButton}
              copiedText={d.gift.copiedText}
            />
          </ErrorBoundary>

          {/* Lazy-loaded sections */}
          <Suspense fallback={null}>
            <ErrorBoundary>
              <Wishes
                title={d.wishes.title}
                subtitle={d.wishes.subtitle}
                intro={d.wishes.intro}
              />
            </ErrorBoundary>
          </Suspense>

          <ErrorBoundary>
            <ClosingFooter
              arabicPrayer={d.footer.arabicPrayer}
              prayerTranslation={d.footer.prayerTranslation}
              closing={d.footer.closing}
              credit={d.footer.credit}
              coupleNames={d.footer.coupleNames}
            />
          </ErrorBoundary>

          {/* Floating UI */}
          <Suspense fallback={null}>
            <ErrorBoundary>
              <SectionNav />
            </ErrorBoundary>
            <ErrorBoundary>
              <SocialShare />
            </ErrorBoundary>
          </Suspense>

          <ErrorBoundary>
            <AudioControl
              src={d.audio.src}
              title={d.audio.title}
              artist={d.audio.artist}
            />
          </ErrorBoundary>
        </main>
      )}
    </>
  );
}

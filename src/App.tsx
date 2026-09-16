/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeaderProgress } from './components/HeaderProgress';
import { CoverHero } from './components/CoverHero';
import { Chapter1Discovery } from './components/Chapter1Discovery';
import { Chapter2LegalDefense } from './components/Chapter2LegalDefense';
import { Chapter3TacticalMap } from './components/Chapter3TacticalMap';
import { Chapter4Showbiz } from './components/Chapter4Showbiz';
import { Chapter5CourtExpansion } from './components/Chapter5CourtExpansion';
import { Chapter6Verdict } from './components/Chapter6Verdict';
import { Chapter7Conclusion } from './components/Chapter7Conclusion';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F1] text-[#1B1B1F] flex flex-col antialiased">
      {/* Top Fixed Reading Progress & Navigation */}
      <HeaderProgress />

      {/* Main Narrative Reportage */}
      <main className="w-full pt-1 bg-[#F9F7F1]">
        <CoverHero />
        <Chapter1Discovery />
        <Chapter2LegalDefense />
        <Chapter3TacticalMap />
        <Chapter4Showbiz />
        <Chapter5CourtExpansion />
        <Chapter6Verdict />
        <Chapter7Conclusion />
      </main>
    </div>
  );
}


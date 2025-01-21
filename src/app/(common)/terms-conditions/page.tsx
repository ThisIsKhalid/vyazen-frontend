import TermsPage from '@/components/pages/TermAndCondition/page';
import CallToAction from '@/components/shared/CallToAction/CallToAction';
import FAQ from '@/components/shared/FAQ/FAQ';
import PageHeader from '@/components/shared/PageHeader/PageHeader';
import React from 'react'

export default function TermsConditions() {
  return <div>
  <PageHeader title="Terms & Condition" subtitle="Terms & Condition" />
  
  <div className="container  md:mt-[140px] sm:mt-[70px] mt-[50px]">
  <TermsPage/>
  </div>
  <FAQ />
  <CallToAction />
</div>;
}

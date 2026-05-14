import type { Metadata } from 'next';
import JobApplication from './JobApplication';

export const metadata: Metadata = {
  title: 'Join Our Team | Careers at A Wesco Septic',
  description: 'Work with A Wesco Septic — second-generation family-owned septic company serving Snohomish County since 1989. Apply for technician, driver, and field positions.',
  alternates: { canonical: '/join-our-team' },
};

export default function JoinOurTeamPage() {
  return <JobApplication />;
}

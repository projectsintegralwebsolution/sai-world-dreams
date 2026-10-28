'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingContactWidget } from '@/components/common/FloatingContactWidget';
import { BackToTop } from '@/components/common/BackToTop';
import { EnquiryModal } from '@/components/common/EnquiryModal';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<string>('Not Decided');

  const openEnquiryModal = (config?: string) => {
    if (config) setModalConfig(config);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenEnquiry={() => openEnquiryModal()} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingContactWidget onOpenEnquiry={() => openEnquiryModal()} />
      <BackToTop />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={closeEnquiryModal}
        defaultInterestedIn={modalConfig}
      />
    </div>
  );
};

"use client";

import { usePortfolio } from "./context";
import { Modal, Text, Heading, CloseButton, Card } from "@/components/primitives";

export function PortfolioModal() {
  const { state, actions } = usePortfolio();
  const { selectedItem, isModalOpen } = state;

  return (
    <Modal.Overlay isOpen={isModalOpen && !!selectedItem} onClose={actions.closeModal}>
      {selectedItem && (
        <Modal.Content className="mx-4">
          <CloseButton onClick={actions.closeModal} />

          <div className="mb-6">
            <Heading level={3} className="mb-0">{selectedItem.title}</Heading>
            <Text variant="muted">{selectedItem.description}</Text>
          </div>

          <embed
            src={selectedItem.pdfPath}
            type="application/pdf"
            className="w-full h-[600px]"
            title={selectedItem.title}
          />
        </Modal.Content>
      )}
    </Modal.Overlay>
  );
}

import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import type { ConstactFormEmailPropsType } from "@/types/email/ContactFormEmailPropsType";

// Email template for contact form
export default function ContactFormEmail({
  senderEmail,
  message,
}: ConstactFormEmailPropsType) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-50 text-gray-800 font-sans">
          <Container>
            <Section className="max-w-xl mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg my-8">
              <div className="px-6 py-4">
                <Heading className="text-xl font-semibold mb-2">
                  New Message from Contact Form
                </Heading>
                <Hr className="my-4" />
                <Text className="text-sm">
                  <strong>Sender's Email:</strong> {senderEmail}
                </Text>
                <Text className="text-sm mb-4">
                  <strong>Message:</strong>
                  <br />
                  {message}
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

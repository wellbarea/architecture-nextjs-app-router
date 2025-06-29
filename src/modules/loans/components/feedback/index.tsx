"use client"

import Image from 'next/image';
import { FeedbackContainer, FeedbackContent, FeedbackText, FeedbackTitle } from './styles';

export const Feedback = () => {
    return (
        <FeedbackContainer data-testid="feedback-container">
            <FeedbackContent data-testid="feedback-content">
                <Image src="/svg/check.svg" alt="Check icon" width={85} height={85} />
                
                <FeedbackTitle variant="h6" data-testid="feedback-title">
                    Thank you!
                </FeedbackTitle>

                <FeedbackText data-testid="feedback-primary-text">
                    A loan officer will reach out to you shortly. If you have any other questions please call us at (202) 555-0139.
                </FeedbackText>

                <FeedbackText data-testid="feedback-secondary-text">
                    Want to speed up the process?
                </FeedbackText>
            </FeedbackContent>
        </FeedbackContainer>
    );
};
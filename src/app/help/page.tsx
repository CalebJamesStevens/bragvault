"use client";

import React from "react";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";

export default function HelpPage() {
  return (
    <Container sx={{paddingY: 2}}>
      <Typography sx={{fontSize: '1.5rem'}} variant="h1">
        The STAR Method: A Guide to Creating Brag Documents
      </Typography>
      <Typography sx={{marginTop: 4}} variant="body1">
        <strong>Introduction:</strong> In the realm of professional success,
        effectively showcasing one&apos;s accomplishments is crucial. Brag documents,
        also known as achievement portfolios or accomplishment trackers, are
        powerful tools for highlighting your skills, experiences, and
        contributions. Within these documents, the STAR method emerges as a
        popular framework for succinctly articulating your achievements. This
        article will delve into what the STAR method entails and how it can be
        utilized to create impressive brag documents that leave a lasting
        impact.
      </Typography>
      <Typography sx={{marginTop: 4}} variant="body1">
        <strong>What is a Brag Document?</strong> A brag document is a
        personalized collection of your professional achievements and noteworthy
        experiences. It serves as a tangible record of your career milestones,
        accolades, and growth. Brag documents are typically used during
        performance evaluations, job interviews, or promotions to support your
        claims and provide concrete evidence of your capabilities. These
        documents provide a comprehensive snapshot of your accomplishments,
        helping you stand out in a competitive professional landscape.
      </Typography>
      <Typography sx={{marginTop: 4}} variant="body1">
        <strong>Understanding the STAR Method:</strong> The STAR method is an
        approach that allows you to succinctly and effectively communicate your
        accomplishments within a brag document. It stands for Situation, Task,
        Action, and Result, and it provides a structured framework for crafting
        compelling stories about your achievements. Let&apos;s break down each
        component:
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">
            <strong>Situation:</strong> Start by providing context for your
            accomplishment. Describe the situation or challenge you encountered.
            What was the specific scenario or problem you faced? Clearly define
            the context to help the reader understand the significance of your
            achievement.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Task:</strong> Next, outline the task or goal you were
            assigned. What was expected of you in this situation? What were the
            objectives you needed to accomplish? This step helps establish the
            purpose and expectations you were working towards.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Action:</strong> Describe the actions you took to address
            the situation or achieve the task. Explain the strategies,
            initiatives, or steps you employed to overcome challenges. Focus on
            your own contributions and emphasize your skills, expertise, and
            leadership abilities. Be specific, highlighting key actions that
            showcase your strengths.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Result:</strong> Finally, detail the outcome or result of
            your actions. What was achieved as a direct result of your efforts?
            Quantify your impact whenever possible, using numbers, metrics, or
            percentages to demonstrate the magnitude of your success. Emphasize
            the positive changes or benefits resulting from your
            accomplishments.
          </Typography>
        </ListItem>
      </List>

      <Typography variant="body1">
        <strong>Crafting Your Brag Document:</strong> When creating your brag
        document, consider the following tips to maximize its impact:
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">
            <strong>Be Selective:</strong> Choose achievements that are
            significant and relevant to your career goals. Prioritize those that
            demonstrate your abilities, problem-solving skills, and initiative.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Quantify Your Achievements:</strong> Whenever possible,
            include tangible metrics to provide measurable evidence of your
            success. Numbers and statistics enhance the credibility of your
            accomplishments.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Be Action-Oriented:</strong> Focus on your individual
            contributions and describe the actions you took. Highlight your
            skills, leadership qualities, and problem-solving abilities to
            showcase your unique value.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <strong>Tailor for the Audience:</strong> Adapt your brag document
            to the specific context or position you are targeting. Customize the
            content to align with the expectations and priorities of your
            intended audience.
          </Typography>
        </ListItem>
      </List>
    </Container>
  );
};

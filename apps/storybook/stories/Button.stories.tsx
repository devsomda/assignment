import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Button } from "@repo/ui/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 버튼 상태입니다.
 * 배경색: #111111, 텍스트 색상: #ffffff
 */
export const Default: Story = {
  args: {
    children: "다음",
    type: "button",
  },
};

/**
 * 호버 상태입니다.
 * 마우스를 버튼 위에 올리면 배경색이 #111111cc로 변경됩니다.
 */
export const Hover: Story = {
  args: {
    children: "다음",
    type: "button",
  },
  parameters: {
    docs: {
      description: {
        story: "마우스를 버튼 위에 올려보세요. 배경색이 변경됩니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <Story />
          <p
            style={{
              marginTop: "16px",
              fontSize: "14px",
              color: "#666",
              textAlign: "center",
            }}
          >
            마우스를 버튼 위에 올려보세요
          </p>
        </div>
      </div>
    ),
  ],
};

/**
 * 클릭/프레스 상태입니다.
 * 버튼을 클릭하면 배경색이 #111111cc로 변경됩니다.
 */
export const Pressed: Story = {
  args: {
    children: "다음",
    type: "button",
  },
  parameters: {
    docs: {
      description: {
        story: "버튼을 클릭한 상태입니다. 배경색이 변경된 모습입니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <div className="storybook-force-active">
            <style>{`
              .storybook-force-active button {
                background-color: #111111cc !important;
              }
            `}</style>
            <Story />
          </div>
          <p
            style={{
              marginTop: "16px",
              fontSize: "14px",
              color: "#666",
              textAlign: "center",
            }}
          >
            클릭한 상태 시뮬레이션
          </p>
        </div>
      </div>
    ),
  ],
};

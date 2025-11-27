import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  stats: string;
}

export enum SocialPlatform {
  Weibo = 'Weibo',
  Douyin = 'Douyin',
  Xiaohongshu = 'Xiaohongshu',
  WeChatChannel = 'WeChatChannel',
  WeChatOfficial = 'WeChatOfficial',
}

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string; // Or QR code image URL for WeChat
  iconPath: string;
}
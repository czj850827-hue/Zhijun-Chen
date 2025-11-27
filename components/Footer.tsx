import React from 'react';
import { SocialLink, SocialPlatform } from '../types';
import { DouyinIcon, WeChatIcon, WeiboIcon, XiaohongshuIcon } from './CustomIcons';

const socialLinks: SocialLink[] = [
  {
    platform: SocialPlatform.Weibo,
    label: '贷略研习社',
    url: '#',
    iconPath: 'weibo'
  },
  {
    platform: SocialPlatform.Douyin,
    label: '贷略研习社',
    url: '#',
    iconPath: 'douyin'
  },
  {
    platform: SocialPlatform.Xiaohongshu,
    label: '贷略研习社',
    url: '#',
    iconPath: 'xhs'
  },
  {
    platform: SocialPlatform.WeChatChannel,
    label: '微信视频号',
    url: '#',
    iconPath: 'wechat'
  },
  {
    platform: SocialPlatform.WeChatOfficial,
    label: '微信公众号',
    url: '#',
    iconPath: 'wechat'
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-white">贷略</span>
              <span className="text-gold-500">研习社</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              专注金融财商培养与债务规划。我们不做贷款中介，我们致力于培养融资专家。让您从债务困境中彻底解脱。
            </p>
            <div className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} 贷略研习社 All Rights Reserved.
            </div>
          </div>

          {/* Social Media Links (The Core Request) */}
          <div className="col-span-1 md:col-span-3">
             <h3 className="text-white font-semibold mb-6">关注我们</h3>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#E6162D] group-hover:text-white transition-all duration-300">
                     <WeiboIcon className="w-6 h-6" />
                  </div>
                  <span className="mt-3 text-gray-400 text-sm group-hover:text-white">官方微博</span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-black group-hover:text-white transition-all duration-300">
                     <DouyinIcon className="w-6 h-6" />
                  </div>
                  <span className="mt-3 text-gray-400 text-sm group-hover:text-white">抖音</span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#FF2442] group-hover:text-white transition-all duration-300">
                     <XiaohongshuIcon className="w-6 h-6" />
                  </div>
                  <span className="mt-3 text-gray-400 text-sm group-hover:text-white">小红书</span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#07C160] group-hover:text-white transition-all duration-300">
                     <WeChatIcon className="w-6 h-6" />
                  </div>
                  <span className="mt-3 text-gray-400 text-sm group-hover:text-white">微信视频号</span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#07C160] group-hover:text-white transition-all duration-300">
                     <WeChatIcon className="w-6 h-6" />
                  </div>
                  <span className="mt-3 text-gray-400 text-sm group-hover:text-white">微信公众号</span>
                </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-500 text-xs">
                投资有风险，借贷需谨慎。本平台提供财商教育与咨询服务，不直接提供放贷资金。
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
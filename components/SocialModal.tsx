
import React, { useState } from 'react';
import { X, Download, ScanLine, Share2, MoreHorizontal } from 'lucide-react';
import { SocialPlatform } from '../types';
import { DouyinIcon, WeChatIcon, WeiboIcon, XiaohongshuIcon } from './CustomIcons';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: SocialPlatform | null;
}

const SocialModal: React.FC<SocialModalProps> = ({ isOpen, onClose, platform }) => {
  if (!isOpen || !platform) return null;

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Helper to handle image fallback to generated QR code
  const QRImage = ({ src, fallbackData, alt, className }: { src: string, fallbackData: string, alt: string, className?: string }) => {
    const [imgSrc, setImgSrc] = useState(src);
    
    return (
      <img 
        src={imgSrc} 
        alt={alt} 
        className={className}
        onError={() => setImgSrc(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${fallbackData}`)}
      />
    );
  };

  const renderContent = () => {
    switch (platform) {
      case SocialPlatform.Douyin:
        return (
          <div className="bg-gradient-to-b from-[#2A2A30] to-[#161722] text-white w-[340px] rounded-[32px] overflow-hidden shadow-2xl relative border border-white/5 font-sans">
            {/* Douyin Close Button */}
            <button onClick={onClose} className="absolute top-4 right-4 p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20">
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="p-8 flex flex-col items-center pt-12">
              <div className="flex items-center gap-2 mb-8 w-full justify-center opacity-90">
                <DouyinIcon className="w-6 h-6 text-white" />
                <span className="font-bold text-lg tracking-wide">抖音</span>
              </div>
              
              {/* Circular QR Container */}
              <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                 <div className="w-[90%] h-[90%] relative">
                   {/* We use a circular mask for the QR code to match the screenshot style */}
                   <QRImage 
                     src="/images/qr-douyin.jpg"
                     fallbackData="douyin_69562607187"
                     alt="Douyin QR"
                     className="w-full h-full object-cover rounded-full p-2"
                   />
                   {/* Center Avatar Overlay */}
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full p-1 shadow-md">
                      <div className="w-full h-full bg-[#1e293b] rounded-full flex items-center justify-center overflow-hidden">
                          {/* Use Logo or specific avatar image */}
                          <span className="font-bold text-[10px] text-gold-500">LOGO</span>
                      </div>
                   </div>
                 </div>
              </div>

              <h3 className="text-2xl font-bold mb-1 tracking-wide">大东哥</h3>
              <p className="text-gray-400 text-sm mb-3 font-medium">抖音号：69562607187</p>
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300 backdrop-blur-sm">财商博主</span>

              <div className="mt-10 flex gap-12 w-full justify-center border-t border-white/10 pt-6">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                   <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                     <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
                        <Download className="w-3 h-3" />
                     </div>
                   </div>
                   <span className="text-xs text-gray-400">保存图片</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                   <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <ScanLine className="w-6 h-6 text-white" />
                   </div>
                   <span className="text-xs text-gray-400">打开抖音扫一扫</span>
                </div>
              </div>
            </div>
          </div>
        );

      case SocialPlatform.Xiaohongshu:
        return (
          <div className="bg-[#FF2442] text-white w-[320px] rounded-[24px] overflow-hidden shadow-2xl relative font-sans">
            <button onClick={onClose} className="absolute top-4 right-4 p-1.5 bg-black/10 rounded-full hover:bg-black/20 transition-colors z-20">
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 h-[520px] flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-white rounded-full p-0.5 shadow-md flex-shrink-0">
                       <div className="w-full h-full bg-[#1e293b] rounded-full flex items-center justify-center text-gold-500 font-bold text-xs overflow-hidden">
                          LOGO
                       </div>
                  </div>
                  <div className="pt-1">
                     <h3 className="font-bold text-xl leading-tight mb-1">贷略研习社</h3>
                     <p className="text-white/80 text-xs font-medium tracking-wide">小红书号：1107464330</p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-2">贷略研习社</h2>
                <div className="text-sm bg-white/20 backdrop-blur-md inline-block px-3 py-1 rounded-full mb-8">
                  财商博主
                </div>
              </div>

              {/* Bottom Section with QR */}
              <div className="flex justify-between items-end border-t border-white/20 pt-6">
                 <div className="space-y-4">
                    <div className="bg-white text-[#FF2442] px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1 shadow-sm">
                       <XiaohongshuIcon className="w-3 h-3" /> 小红书
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-sm font-bold opacity-95">扫描二维码</p>
                        <p className="text-xs text-white/70">在小红书找到我</p>
                    </div>
                 </div>
                 <div className="bg-white p-2 rounded-xl shadow-lg">
                    <QRImage 
                      src="/images/qr-xhs.jpg"
                      fallbackData="xhs_1107464330"
                      alt="XHS QR"
                      className="w-24 h-24"
                    />
                 </div>
              </div>
            </div>
            
            {/* Decorative circles background */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-40 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        );

      case SocialPlatform.Weibo:
        return (
          <div className="bg-white text-gray-800 w-[340px] rounded-[32px] overflow-hidden shadow-2xl relative font-sans">
             <button onClick={onClose} className="absolute top-4 right-4 p-1.5 bg-black/5 rounded-full hover:bg-black/10 transition-colors z-20">
              <X className="w-5 h-5 text-gray-600" />
            </button>
             
             {/* Gradient Header */}
             <div className="h-32 bg-gradient-to-br from-[#FFF5E8] to-[#FFFFFF]"></div>
             
             <div className="px-8 pb-8 -mt-14 relative z-10 text-center">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto bg-white rounded-full p-1 shadow-lg mb-3">
                     <div className="w-full h-full bg-[#1e293b] rounded-full flex items-center justify-center text-gold-500 font-bold overflow-hidden border-2 border-white">
                       LOGO
                     </div>
                </div>
                
                <h3 className="font-bold text-xl mb-1 text-gray-900">@阿东哥-贷略研习社</h3>
                <p className="text-gray-500 text-sm mb-6 flex items-center justify-center gap-1">
                  <span className="inline-block w-1 h-3 bg-gold-500 rounded-full"></span>
                  简介：财经博主
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-10 mb-8">
                   <div className="text-center">
                      <div className="font-bold text-xl text-gray-900">1</div>
                      <div className="text-xs text-gray-400 mt-1">粉丝</div>
                   </div>
                   <div className="text-center border-l border-r border-gray-100 px-10">
                      <div className="font-bold text-xl text-gray-900">3</div>
                      <div className="text-xs text-gray-400 mt-1">关注</div>
                   </div>
                   <div className="text-center">
                      <div className="font-bold text-xl text-gray-900">11</div>
                      <div className="text-xs text-gray-400 mt-1">转评赞</div>
                   </div>
                </div>

                {/* Footer Action Card */}
                <div className="flex items-center justify-between bg-[#F9F9F9] p-4 rounded-xl border border-gray-100">
                   <div className="text-left flex-1">
                      <WeiboIcon className="w-8 h-8 text-[#E6162D] mb-2" />
                      <div className="text-xs text-gray-500 font-medium">保存图片到相册</div>
                      <div className="text-xs text-gray-400">打开微博扫一扫</div>
                   </div>
                   <div className="bg-white p-1 rounded-lg border border-gray-100">
                      <QRImage 
                        src="/images/qr-weibo.jpg"
                        fallbackData="weibo_adongge"
                        alt="Weibo QR"
                        className="w-20 h-20"
                      />
                   </div>
                </div>
             </div>
             
             {/* Logo Watermark */}
             <div className="absolute bottom-[-10px] right-[-10px] opacity-5 pointer-events-none">
                <WeiboIcon className="w-32 h-32" />
             </div>
          </div>
        );

      case SocialPlatform.WeChatChannel:
        return (
          <div className="bg-white text-gray-800 w-[320px] rounded-[24px] overflow-hidden shadow-2xl relative p-8 text-center font-sans">
             <button onClick={onClose} className="absolute top-4 right-4 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-20">
               <X className="w-5 h-5 text-gray-500" />
             </button>
             
             <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="w-12 h-12 bg-[#1e293b] rounded-full flex items-center justify-center text-gold-500 font-bold text-xs border-2 border-white shadow-sm">
                  LOGO
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 mb-0.5">微信视频号</div>
                  <h3 className="font-bold text-md text-gray-900">大东哥-贷略研习社</h3>
                </div>
             </div>
             
             <div className="relative mb-8">
               {/* Circular Pattern for Video Channel */}
                <div className="w-64 h-64 mx-auto relative flex items-center justify-center">
                  <QRImage 
                    src="/images/qr-channel.jpg"
                    fallbackData="wechat_channel_qr"
                    alt="WeChat Channel QR"
                    className="w-full h-full object-contain"
                  />
                  {/* If using placeholder, we simulate the circular look */}
                  <div className="absolute inset-0 border-[20px] border-white rounded-full pointer-events-none mix-blend-screen"></div>
                </div>
             </div>
             
             <div className="flex items-center justify-center gap-2 text-[#fa9d3b] text-sm font-medium bg-[#fff7eb] py-3 px-6 rounded-full mx-auto w-max">
                <Share2 className="w-4 h-4" />
                <span>分享给好友</span>
             </div>
             
             <div className="mt-6 text-xs text-gray-400">
                扫一扫二维码，关注我的视频号
             </div>
          </div>
        );

      default: // WeChat Official Account
        return (
          <div className="bg-white text-gray-800 w-[320px] rounded-[12px] overflow-hidden shadow-2xl relative p-8 text-center font-sans">
            <button onClick={onClose} className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors z-20">
              <X className="w-5 h-5 text-gray-400" />
            </button>
            
            <h3 className="font-bold text-lg mb-8 text-gray-900">贷略研习社</h3>
            
            <div className="mx-auto mb-8 w-48 h-48">
                 <QRImage 
                   src="/images/qr-gzh.jpg"
                   fallbackData="wechat_official_qr"
                   alt="WeChat QR"
                   className="w-full h-full object-contain"
                 />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mb-2">
               <WeChatIcon className="w-4 h-4 text-[#07C160]" />
               <span>微信扫一扫 关注公众号</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content - Animate In */}
      <div className="relative z-10 animate-in fade-in zoom-in-95 duration-300">
        {renderContent()}
      </div>
    </div>
  );
};

export default SocialModal;

'use client'

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/lib/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm here to help you learn about Deltanoid's services. Ask me anything about SaaS development, performance marketing, or reputation management!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          history: messages.slice(-6)
        })
      });

      const data = await response.json();
      console.log("Chat response data:", data);
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to get response');
      }

      console.log("AI reply:", data.response);

      if (data.response) {
        setMessages([...newMessages, { role: 'assistant', content: data.response }]);
      } else {
        throw new Error('No response from AI');
      }
    } catch (error) {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please try asking your question via our contact form on the Let's Talk page, or email us at admin@deltanoid.in"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[32rem] z-50">
          <Card className="h-full flex flex-col shadow-2xl bg-background/80 backdrop-blur-sm border border-border/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <div className="p-1 rounded-full bg-primary/10 text-primary">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span>Chat with Deltanoid AI</span>
                <Sparkles className="ml-2 h-4 w-4 text-primary/40 animate-pulse" />
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                data-testid="button-close-chat"
                className="hover:bg-muted/60"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0 overflow-auto">
              <div className="flex-1 overflow-y-auto p-4 space-y-4 pr-2 custom-scrollbar" style={{maxHeight: '100%'}}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} min-w-0`}
                  >
                    <div
                      className={`chat-bubble rounded-lg p-3 shadow-sm box-border overflow-hidden break-words whitespace-pre-wrap max-w-[calc(100%-4rem)] md:max-w-[20rem] ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`} 
                      data-testid={`message-${message.role}-${index}`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3 flex items-center gap-2">
                      <div className="typing-dots">
                        <span className="dot" />
                        <span className="dot delay-150" />
                        <span className="dot delay-300" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our services..."
                    disabled={isLoading}
                    data-testid="input-chat-message"
                    className="focus:ring-2 focus:ring-primary/30"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    size="icon"
                    aria-label="Send message"
                    data-testid="button-send-message"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-transform duration-200"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!isOpen && (
        <Button
          style={{position:"fixed",zIndex:9999}}
          onClick={() => setIsOpen(true)}
          size="icon"
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center"
          data-testid="button-open-chat"
        >
          <MessageCircle className="w-6 h-6 animate-bounce" />
        </Button>
      )}
    </>
  );
}

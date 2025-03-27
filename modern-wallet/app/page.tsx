"use client"

import { useState } from "react"
import {
  ChevronDown,
  Settings,
  CheckCircle2,
  ArrowRight,
  Shield,
  Database,
  Coins,
  FileCheck,
  BookOpen,
  Workflow,
  Layers,
  FolderGit2,
  BracketsIcon as Bridge,
  KeyRound,
  ShieldCheck,
  Wallet,
  Users,
  Globe,
  FileText,
  BanknoteIcon as Bank,
  HardDrive,
  FileImage,
  BadgeCheck,
  UserCheck,
  Award,
  Terminal,
  Tag,
  Bot,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export default function WalletDashboard() {
  const [activeNetwork, setActiveNetwork] = useState("Mainnet")
  const [activeAccount, setActiveAccount] = useState("Account 1")
  const [activeWallet, setActiveWallet] = useState("LiteWallet")
  const [darkMode, setDarkMode] = useState(false)
  const [walletAddress, setWalletAddress] = useState("0x7F5Ec7A8C894D465f6C1E9F21B6F7E17a7Cf9aC3")
  const [acmeBalance, setAcmeBalance] = useState(1458.75)

  const networks = [
    { name: "Mainnet", active: true },
    { name: "Kermit Testnet", active: true },
    { name: "Beta Testnet", active: false },
    { name: "Fozzie Testnet", active: false },
  ]

  const accounts = ["Account 1", "Account 2", "Account 3"]

  const wallets = ["LiteWallet", "IdentityWallet", "DataWallet", "CoinIssuerWallet"]

  const walletApps = [
    {
      id: "lite-wallet",
      name: "Lite Wallet",
      description: "The starting point",
      details:
        "Do the basic blockchain operations such as sending and receiving tokens. Create root level Adis. Manage your keys and encryption settings. Setup security",
      cta: "Go to Lite Wallet",
      footer: "All basic features of a wallet is included in this",
      icon: <Wallet className="h-10 w-10 text-primary" />,
    },
    {
      id: "identity-wallet",
      name: "Identity Wallet",
      description: "It all starts with your Identity",
      details:
        "Your decentralized identity starts here. Begin your journey to the world of identity based decentralized world. Your identity is going to digitally define everything about you",
      cta: "Go to Identity Wallet",
      footer: "Everything is centered around the innovative identity based blockchain - Accumulate",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      id: "data-wallet",
      name: "Data Wallet",
      description: "A blockchain based database",
      details:
        "Manage your data or proof in blockchain. Traditionally, your data was stored on proprietary systems like Azure or AWS. It does not have to be there anymore. Learn more about Accumulate custom validators",
      cta: "Go to Data Wallet",
      footer:
        "Store data in plain or encrypted format. IoT or AI data. Low transaction fees and killer data features - only on Accumulate",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      id: "coin-issuer-wallet",
      name: "Coin Issuer Wallet",
      description: "Create your own a coin",
      details:
        "Not able to believe it? You dont have to hire a programmer to create a coin anymore. Under 30 seconds, you can create your own a token.",
      cta: "Go to Coin Issuer Wallet",
      footer: "Your coin could be setup with its own a web site as well.",
      icon: <Coins className="h-10 w-10 text-primary" />,
    },
    {
      id: "attestation-wallet",
      name: "Attestation Wallet",
      description: "Attestation Wallet",
      details: "Would you like to attest your asset transfers as part of an approval process?",
      cta: "Go to Attestation Wallet",
      footer:
        "A transaction can happen at any EVM blockchain but attestation happens on a different low cost security blockchain",
      icon: <FileCheck className="h-10 w-10 text-primary" />,
    },
    {
      id: "process-wallet",
      name: "Process Wallet",
      description: "First-ever Web3 BPM",
      details:
        "Web 3+ Wallet: Business Process Management orchastrates a series of transactions from your wallet. Everything changes with this. Imagine a world where you are an individual data processing center. A process engine operates from your own wallet",
      cta: "Go to Process Wallet",
      footer:
        "Your wallet will be able to do powerful operations such as sending emails to requesting for money and waiting and then start another activity.",
      icon: <Workflow className="h-10 w-10 text-primary" />,
    },
    {
      id: "rules-wallet",
      name: "Rules Wallet",
      description: "Rules engine inside your wallet",
      details:
        "Web 3+ Wallet: All rules are picked up realtime from blockchain. Executes it and logs back into blockchain. Now you have a personal rules engine. Customizable and centered around your identities",
      cta: "Go to Rules Wallet",
      footer:
        "The rules engine makes it possible to achieve many things that were unimaginable in the past. It uses a powerful data and program discovery architecture",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
    {
      id: "evm-wallet",
      name: "EVM Wallet",
      description: "Ethereum Virtual Network",
      details: "EVM Wallet - Interact with Ethereum chains such as Bsc, Matic or Base etc",
      cta: "Go to EVM Wallet",
      footer: "Supports multiple EVM networks",
      icon: <Layers className="h-10 w-10 text-primary" />,
    },
    {
      id: "ipfs-wallet",
      name: "IPFS Wallet",
      description: "www.IpfsServer.com",
      details: "IPFS Wallet - Interact with IPFS Network such as LightHouse or Pinata.",
      cta: "Go to IPFS Wallet",
      footer: "Pin your documents to IPFS. Tie it to blockchain.",
      icon: <FolderGit2 className="h-10 w-10 text-primary" />,
    },
    {
      id: "bridge-wallet",
      name: "Bridge Wallet",
      description: "Bridge ACME",
      details: "Bridge Wallet - Bridge ACME to other blokchains",
      cta: "Go to Bridge Wallet",
      footer: "Bridge ACME to/from Ethereum, Arbitrum and other chains",
      icon: <Bridge className="h-10 w-10 text-primary" />,
    },
    {
      id: "account-abstraction-wallet",
      name: "Account Abstraction Wallet",
      description: "Account Abstraction",
      details: "Account Abstraction Wallet - create and manage a managed account in EVM chain",
      cta: "Go to Account Abstraction Wallet",
      footer: "Account abstraction provides options for enterprises to loosely couple custody of assets",
      icon: <KeyRound className="h-10 w-10 text-primary" />,
    },
    {
      id: "security-wallet",
      name: "Security Wallet",
      description: "Security is built in",
      details: "Now you can drive your critical business decisions with the help of Accumulate Keybooks.",
      cta: "Go to Security Wallet",
      footer:
        "Keybook and keypage enable an organization to setup complex security policies - out in the open with the help of blockchain",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      id: "super-wallet",
      name: "Super Wallet",
      description: "It is all here",
      details: "The super wallet shows all kinds of options for an advanced user. All menu options are displayed",
      cta: "Go to Super Wallet",
      footer: "This wallet is recommended only for advanced users",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      id: "multi-signature-wallet",
      name: "Multi Signature Wallet",
      description: "Multi Signature",
      details: "Multi signature usecases?",
      cta: "Go to Multi Signature Wallet",
      footer:
        "Multiple people or devices can sign. Approval and rejection threshold levels. Complex voting setup. Attestation based voting.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ]

  const webApps = [
    {
      id: "web3-website-builder",
      name: "Web 3 Web Site Builder",
      description: "www.Qoboto.com",
      details:
        "Web 3+ Wallet: You don't need to use expensive software to create and host your own web site. www.OperateID.com and www.OperateCrypto.com makes it easier to setup a web site. Hosting fee is determined by the provider",
      cta: "Go to Web 3 Web Site Builder",
      footer:
        "You can edit your website and save to accumulate numerous times. Even if you do it 100 times, the total transaction cost will feel cost effective",
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
    {
      id: "web3-data-form-builder",
      name: "Web 3 Data Form Builder",
      description: "www.Metial.com",
      details:
        "Switch to decentralized forms. www.OperateID.com and www.OperateCrypto.com make it easier to setup a decentralized data app. Hosting fee is determined by the provider",
      cta: "Go to Web 3 Data Form Builder",
      footer: "Encrypt your data. Encode data. Compress Data. Proof only storage. Break it down and store.",
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      id: "bank-on-ledger",
      name: "Bank on Ledger",
      description: "www.BankOnLedger.com",
      details:
        "Switch to decentralized bank. www.OperateID.com and www.OperateCrypto.com make it easier to setup a decentralized bank.",
      cta: "Go to Bank on Ledger",
      footer:
        "You could define several types of token accounts and web apps will recognize and map it using techniques such as DNS translations.",
      icon: <Bank className="h-10 w-10 text-primary" />,
    },
    {
      id: "data-audit",
      name: "Data Audit, Trail and Proof",
      description: "www.DataProofLabs.com",
      details: "A development framework that will let you create your blockchain audit systems quickly",
      cta: "Go to Data Audit, Trail and Proof",
      footer:
        "Based on your blockchain logging business requirements, the felxible framework will customize the software to fit your unique business needs.",
      icon: <HardDrive className="h-10 w-10 text-primary" />,
    },
    {
      id: "iot-data-forms",
      name: "IoT Data Forms",
      description: "www.OnLedgerIoT.com",
      details:
        "Struggling with IoT architecture or software? The product will automate many of the IoT problems for you.",
      cta: "Go to IoT Data Forms",
      footer:
        "IoT solutions need enterprize grade designs and cost effective solutions. The product can quickly bring your IoT software into blockchain.",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      id: "ledger-documents",
      name: "Ledger Documents",
      description: "www.LedgerDocuments.com",
      details: "The vision is to bring google docs and MS Office to decentralized world.",
      cta: "Go to Ledger Documents",
      footer:
        "How long are we going to store our documents with private companies? Time to move to private public blockchains.",
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      id: "nft-workspace",
      name: "Nft Workspace",
      description: "www.NftWorkspace.com",
      details: "You can publish your NFT in minutes.",
      cta: "Go to Nft Workspace",
      footer:
        "An architecture that is more superior than traditional NFT architecture. Imagine a complex combination of account abstraction and NFT - that is what you get with Accumulate NFT.",
      icon: <FileImage className="h-10 w-10 text-primary" />,
    },
    {
      id: "rwa-simplified",
      name: "RWA Simplified",
      description: "www.RwaSimplified.com",
      details:
        "RWA Projects does not have to be extremely complex. We simplify it - both the development effort and the cost.",
      cta: "Go to RWA Simplified",
      footer: "You can launch your first RWA project on the same day. End to end support and development tools.",
      icon: <Coins className="h-10 w-10 text-primary" />,
    },
    {
      id: "aml-on-chain",
      name: "AML on Chain",
      description: "www.AmlOnChain.com",
      details: "AML (Anti-Money Laundering) certificate can be managed and enforced by Operate",
      cta: "Go to AML on Chain",
      footer: "Be an AML certification provider. We handle all underlying plumbing.",
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    },
    {
      id: "kyc-on-chain",
      name: "KYC on Chain",
      description: "www.KycOnChain.com",
      details: "KYC (Know Your Customer) certificate can be managed and enforced by Operate",
      cta: "Go to KYC on Chain",
      footer: "Become a KYC certification provider. We've got you covered.",
      icon: <UserCheck className="h-10 w-10 text-primary" />,
    },
    {
      id: "certified-items",
      name: "Certified Items",
      description: "www.CertifiedItems.com",
      details: "Certifications can be issued and managed here",
      cta: "Go to Certified Items",
      footer:
        "Be a certification provider. Courses, exams, tests or experience or any kind of certificates. You may also enforce them.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      id: "chain-of-commands",
      name: "Chain of Commands",
      description: "www.DispatchCrypto.com",
      details: "Send commands to EVM",
      cta: "Go to Chain of Commands",
      footer: "Send commands to EVM.",
      icon: <Terminal className="h-10 w-10 text-primary" />,
    },
    {
      id: "promotions",
      name: "Promotions",
      description: "www.PreSaleChain.com",
      details: "Explore Promotions",
      cta: "Go to Promotions",
      footer: "Promotions and coupons",
      icon: <Tag className="h-10 w-10 text-primary" />,
    },
    {
      id: "biz-first-ai-agents",
      name: "Biz First Ai Agents",
      description: "www.BizFirstAi.com",
      details: "Define AI Agents and manage its properties.",
      cta: "Go to Biz First Ai Agents",
      footer: "Your AI Agents are defined and configured through ADI or Operate ID.",
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      id: "biz-first-data-stores",
      name: "Biz First Data Stores",
      description: "www.BizFirstAi.com",
      details: "Define AI Data Stores and manage its properties.",
      cta: "Go to Biz First Data Stores",
      footer: "Your AI Data Stores are defined and configured through ADI or Operate ID.",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={cn("min-h-screen bg-background", darkMode ? "dark" : "")}>
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-primary w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <Wallet className="text-white h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold">Wallet OS</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sun"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </Button>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-lg font-medium mb-1">Current Wallet</h2>
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground mr-2">Address:</span>
                <code className="bg-background px-2 py-1 rounded text-sm font-mono">
                  {walletAddress.substring(0, 8)}...{walletAddress.substring(walletAddress.length - 6)}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 ml-1"
                  onClick={() => {
                    navigator.clipboard.writeText(walletAddress)
                    // You could add a toast notification here
                  }}
                  aria-label="Copy address"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-copy"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="bg-background p-4 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="mr-3 bg-primary/10 p-2 rounded-full">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ACME Balance</p>
                  <p className="text-2xl font-bold">{acmeBalance.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Switch Network</CardTitle>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {activeNetwork}
                    <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {networks.map((network) => (
                    <DropdownMenuItem
                      key={network.name}
                      onClick={() => setActiveNetwork(network.name)}
                      className="flex justify-between"
                    >
                      <span>{network.name}</span>
                      {!network.active && <span className="text-muted-foreground text-xs">(Inactive)</span>}
                      {activeNetwork === network.name && <CheckCircle2 className="h-4 w-4 ml-2 text-primary" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Switch Active Account</CardTitle>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {activeAccount}
                    <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {accounts.map((account) => (
                    <DropdownMenuItem
                      key={account}
                      onClick={() => setActiveAccount(account)}
                      className="flex justify-between"
                    >
                      {account}
                      {activeAccount === account && <CheckCircle2 className="h-4 w-4 ml-2 text-primary" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Switch Wallets</CardTitle>
            </CardHeader>
            <CardContent>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {activeWallet}
                    <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {wallets.map((wallet) => (
                    <DropdownMenuItem
                      key={wallet}
                      onClick={() => setActiveWallet(wallet)}
                      className="flex justify-between"
                    >
                      {wallet}
                      {activeWallet === wallet && <CheckCircle2 className="h-4 w-4 ml-2 text-primary" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Active Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wallet className="h-5 w-5 mr-2 text-primary" />
                  <span>{activeWallet}</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Wallet Operating System</h2>
          <Tabs defaultValue="wallet-apps">
            <TabsList className="mb-4 bg-sky-100 dark:bg-sky-900/20">
              <TabsTrigger value="wallet-apps">Wallet Apps</TabsTrigger>
              <TabsTrigger value="web-apps">Web Apps</TabsTrigger>
            </TabsList>
            <TabsContent value="wallet-apps">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Select a Web 3 Wallet App</h3>
                <p className="text-muted-foreground">
                  14 Wallet Apps are installed on your WOC (Wallet Operating System)
                </p>
              </div>
              <ScrollArea className="h-[calc(100vh-350px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {walletApps.map((app) => (
                    <Card
                      key={app.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow border-sky-100 dark:border-sky-900/20"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          {app.icon}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardTitle className="mt-2">{app.name}</CardTitle>
                        <CardDescription>{app.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{app.details}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start pt-0">
                        <Button
                          variant="default"
                          className="mb-3 w-full justify-between bg-primary hover:bg-primary/90"
                        >
                          {app.cta}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <p className="text-xs text-muted-foreground">{app.footer}</p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="web-apps">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Select a Web App</h3>
                <p className="text-muted-foreground">15 apps are installed on your WOC (Wallet Operating System)</p>
              </div>
              <ScrollArea className="h-[calc(100vh-350px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {webApps.map((app) => (
                    <Card
                      key={app.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow border-sky-100 dark:border-sky-900/20"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          {app.icon}
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardTitle className="mt-2">{app.name}</CardTitle>
                        <CardDescription>{app.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{app.details}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start pt-0">
                        <Button
                          variant="default"
                          className="mb-3 w-full justify-between bg-primary hover:bg-primary/90"
                        >
                          {app.cta}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <p className="text-xs text-muted-foreground">{app.footer}</p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="text-sm font-medium mb-2">Development Support</h3>
          <p className="text-xs text-muted-foreground">This is advertisement space</p>
          <div className="mt-2 p-3 bg-card rounded border">
            <p className="text-sm">Imagine your ad here:</p>
            <p className="text-xs mt-1 text-muted-foreground">
              Operate Crypto outsource crypto programmers from India. Our platform speeds up the development and
              drastically reduces code. Reach out to us www.OperateCrypto.com or www.IpfsServer.com
            </p>
            <p className="text-xs mt-2 italic text-muted-foreground">
              This is ad. You could put your ad for a fee as low as $99 a month.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


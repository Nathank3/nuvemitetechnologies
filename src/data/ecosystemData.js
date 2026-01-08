// Product Ecosystem Data
import { 
    FlaskConical, 
    GraduationCap, 
    Stethoscope, 
    Building, 
    Package, 
    Calculator, 
    Map as MapIcon, 
    Truck 
} from 'lucide-react';

export const ecosystemData = {
    'lims': {
        name: "Imara LIMS",
        icon: FlaskConical,
        theme: "red",
        features: [
            "Sample Management", 
            "Workflow Automation", 
            "Inventory Management", 
            "Compliance & Security", 
            "Reporting & Analytics", 
            "Customer Portal", 
            "Integration Capabilities", 
            "Billing & Invoicing"
        ]
    },
    'school': {
        name: "Imara School",
        icon: GraduationCap,
        theme: "blue",
        features: [
            "Student Info System", 
            "Academic Management", 
            "Fee Management", 
            "Timetable Management", 
            "Library Management", 
            "Hostel & Transport", 
            "HR & Payroll", 
            "Communication"
        ]
    },
    'hms': {
        name: "Hospital Management",
        icon: Stethoscope,
        theme: "emerald",
        features: [
            "Patient Registration", 
            "Doctor Scheduling", 
            "Inpatient/Outpatient", 
            "Pharmacy & Inventory", 
            "Lab & Radiology", 
            "Billing & Insurance", 
            "Ward Management", 
            "Medical Records (EMR)"
        ]
    },
    'property': {
        name: "Property Management",
        icon: Building,
        theme: "amber",
        features: [
            "Tenant & Leases", 
            "Rent & Utility Billing", 
            "Maintenance Tracking", 
            "Financial Reporting", 
            "Vendor Management", 
            "Document Management", 
            "Automated Alerts", 
            "Vacancy Tracking"
        ]
    },
    'inventory': {
        name: "Inventory System",
        icon: Package,
        theme: "purple",
        features: [
            "Stock Tracking", 
            "Purchase Orders", 
            "Supplier Management", 
            "Warehouse Mgmt", 
            "Sales Fulfillment", 
            "Barcode/QR Scanning", 
            "Low Stock Alerts", 
            "Valuation Reports"
        ]
    },
    'accounting': {
        name: "Accounting",
        icon: Calculator,
        theme: "indigo",
        features: [
            "General Ledger", 
            "AP & AR", 
            "Bank Reconciliation", 
            "Financial Reporting", 
            "Tax Compliance", 
            "Budgeting", 
            "Multi-Currency", 
            "Payroll Integration"
        ]
    },
    'kmacho': {
        name: "Kmacho Data",
        icon: MapIcon,
        theme: "pink", // Fixed to Pink as requested
        features: [
            "Mobile Data Collection", 
            "Offline Entry", 
            "GPS Tracking", 
            "Real-Time Sync", 
            "Custom Forms", 
            "Photo Capture", 
            "Survey Logic", 
            "Analytics"
        ]
    },
    'logistics': { // New one? Prompt mentions "Imara Logistics". It wasn't in ProductsPage.
        name: "Imara Logistics",
        icon: Truck,
        theme: "cyan",
        features: [
            "Fleet Management", 
            "Route Optimization", 
            "Driver Tracking", 
            "Delivery Management", 
            "Fuel Management", 
            "Maintenance Scheduling", 
            "Proof of Delivery", 
            "Cost Tracking"
        ]
    }
};

// Helper to get color classes based on theme name
export const getThemeColors = (theme) => {
    // We need to support the themes listed: red, blue, emerald, amber, purple, indigo, pink, cyan
    // Tailwind specific mapping
    const colors = {
        red: { text: 'text-red-500', border: 'border-red-500', bg: 'bg-red-500', shadow: 'shadow-red-500/50', stroke: '#ef4444' },
        blue: { text: 'text-blue-500', border: 'border-blue-500', bg: 'bg-blue-500', shadow: 'shadow-blue-500/50', stroke: '#3b82f6' },
        emerald: { text: 'text-emerald-500', border: 'border-emerald-500', bg: 'bg-emerald-500', shadow: 'shadow-emerald-500/50', stroke: '#10b981' },
        amber: { text: 'text-amber-500', border: 'border-amber-500', bg: 'bg-amber-500', shadow: 'shadow-amber-500/50', stroke: '#f59e0b' },
        purple: { text: 'text-purple-500', border: 'border-purple-500', bg: 'bg-purple-500', shadow: 'shadow-purple-500/50', stroke: '#a855f7' },
        indigo: { text: 'text-indigo-500', border: 'border-indigo-500', bg: 'bg-indigo-500', shadow: 'shadow-indigo-500/50', stroke: '#6366f1' },
        pink: { text: 'text-pink-500', border: 'border-pink-500', bg: 'bg-pink-500', shadow: 'shadow-pink-500/50', stroke: '#ec4899' },
        cyan: { text: 'text-cyan-500', border: 'border-cyan-500', bg: 'bg-cyan-500', shadow: 'shadow-cyan-500/50', stroke: '#06b6d4' },
        orange: { text: 'text-orange-500', border: 'border-orange-500', bg: 'bg-orange-500', shadow: 'shadow-orange-500/50', stroke: '#f97316' }, // Fallback/Alternative
    };
    return colors[theme] || colors['blue'];
};

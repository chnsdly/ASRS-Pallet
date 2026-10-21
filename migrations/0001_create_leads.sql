-- ASRS-Pallet production D1 schema for functions/api/lead.ts.
-- Run once on the ASRS database, never on Plastic-Pallets' database.
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY,
  created_at TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  country TEXT NOT NULL,
  message TEXT,
  page_url TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  ip TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at
  ON leads (created_at DESC);

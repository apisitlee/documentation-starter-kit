import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>安阳古文</span>,
  search: {
    placeholder: '全文搜索'
  },
  sidebar: {
    toggleButton: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: null,
  },
}

export default config

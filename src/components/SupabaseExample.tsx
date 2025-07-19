'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SupabaseExample() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const testConnection = async () => {
    setLoading(true)
    try {
      // Check if environment variables are set
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
        setMessage('⚠️ Supabase environment variables not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.')
        return
      }

      // Test the connection by getting the current user (will be null if not authenticated)
      const { error } = await supabase.auth.getUser()
      
      if (error) {
        setMessage(`Connection error: ${error.message}`)
      } else {
        setMessage('✅ Supabase connection successful!')
      }
    } catch (error) {
      setMessage(`Error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Supabase Integration Test</h2>
      <button
        onClick={testConnection}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Supabase Connection'}
      </button>
      {message && (
        <p className="mt-4 p-3 bg-gray-100 rounded">
          {message}
        </p>
      )}
    </div>
  )
} 
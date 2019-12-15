using System;
using System.Data;

namespace GS.Dal
{
    public abstract class DbConnectionHelper : IDisposable
    {
        private string m_ConnectionString;
        private IDbConnection m_Connection;
        private bool m_Disposed = false;

        public DbConnectionHelper(string connectionString)
        {
            m_ConnectionString = connectionString;
        }

        public IDbConnection Connection
        {
            get
            {
                return m_Connection;
            }
        }

        public bool IsConnected
        {
            get
            {
                return !m_Disposed && m_Connection != null;
            }
        }

        protected string ConnectionString
        {
            get { return ConnectionString; }
        }

        public void Dispose()
        {
            Dispose(true);

            GC.SuppressFinalize(this);
        }

        public void Open()
        {
            if(m_Disposed)
            {
                throw new Exception("Open Failed. Connection already Disposed");
            }

            if(IsConnected)
            {
                Close();
            }

            m_Connection = CreateConnection();
            m_Connection.Open();
        }

        public void Close()
        {
            if(m_Disposed)
            {
                throw new Exception("Close Failed. Connection Already Disposed");
            }

            if(m_Connection != null)
            {
                m_Connection.Close();
                m_Connection = null;
            }
        }

        protected internal abstract IDbConnection CreateConnection();

        protected virtual void Dispose(bool disposing)
        {
            if(!m_Disposed)
            {
                if(disposing)
                {
                    if(m_Connection != null)
                    {
                        m_Connection.Dispose();
                    }
                }

                m_Connection = null;
                m_Disposed = true;
            }
        }

        protected void VerifyConnection()
        {
            if(m_Disposed)
            {
                throw new Exception("Connection is Disposed");
            }

            if(!IsConnected)
            {
                throw new Exception("Connection is Closed");
            }
        }
    }
}

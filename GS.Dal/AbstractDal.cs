using System;

namespace GS.Dal
{
    public abstract class AbstractDal : IDisposable
    {
        protected DbConnectionHelper DatabaseConnection { get; private set; }

        private bool m_Disposed;
        private string m_DefaultConnectionString;

        public AbstractDal()
        {
            m_Disposed = false;
            m_DefaultConnectionString = null;
            DatabaseConnection = null;
        }

        public AbstractDal(string connectionString)
        {
            m_Disposed = false;
            m_DefaultConnectionString = connectionString;
            DatabaseConnection = null;
        }

        public virtual string GetConnectionString()
        {
            return m_DefaultConnectionString;
        }

        public virtual void CheckConnection()
        {
            if(m_Disposed)
            {
                throw new Exception("Dal already disposed");
            }

            if(DatabaseConnection == null)
            {
                Open();
            }

            if(!DatabaseConnection.IsConnected)
            {
                DatabaseConnection.Open();
            }
        }

        public virtual void Dispose()
        {
            if(!m_Disposed)
            {
                m_Disposed = true;
                if(DatabaseConnection != null)
                {
                    DatabaseConnection.Close();
                    DatabaseConnection.Dispose();
                    DatabaseConnection = null;
                }
            }
        }

        protected abstract DbConnectionHelper BuildDbConnection(string ConnectionString);

        protected string GetValidatedConnectionString()
        {
            var connectionString = GetConnectionString();
            if(string.IsNullOrWhiteSpace(connectionString))
            {
                throw new Exception("Connectionstring is Missing");
            }

            return connectionString;
        }

        private void Open()
        {
            if(DatabaseConnection == null)
            {
                m_Disposed = false;

                DbConnectionHelper newConnection = null;
                try
                {
                    newConnection = BuildDbConnection(GetValidatedConnectionString());
                    newConnection.Open();
                }
                catch(Exception ex)
                {
                    if(newConnection != null)
                    {
                        newConnection.Dispose();
                        newConnection = null;
                    }

                    throw ex;
                }

                DatabaseConnection = newConnection;
            }
        }
    }
}

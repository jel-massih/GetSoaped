using Microsoft.Data.SqlClient;
using System;
using System.Data;
using System.Threading.Tasks;

namespace GS.Dal
{
    public class SqlConnectionHelper : DbConnectionHelper
    {
        public SqlConnectionHelper(string connectionString)
            : base(connectionString)
        {
        }

        public T ExecQuery<T>(Func<SqlConnection, T> f)
        {
            VerifyConnection();

            return f(Connection as SqlConnection);
        }

        public async Task<T> ExecQueryAsync<T>(Func<SqlConnection, Task<T>> f)
        {
            VerifyConnection();
            return await f(Connection as SqlConnection);
        }

        public async Task<T> ExecInTransactionASync<T>(Func<SqlConnection, SqlTransaction, Task<T>> f)
        {
            var result = await ExecQueryAsync(async conn =>
            {
                using(var transaction = conn.BeginTransaction(IsolationLevel.ReadCommitted))
                {
                    return await f(conn, transaction);
                }
            });

            return result;
        }

        protected internal override IDbConnection CreateConnection()
        {
            return new SqlConnection(ConnectionString);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
namespace InterviewTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var proc = Process.Start(@"cmd.exe ",@"/c https://github.com/sinzinc28/InterviewTest/blob/main/formSearch.html");
        }
    }
}
